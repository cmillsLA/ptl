/**
 * This file contains the common middleware used by your routes.
 * 
 * Extend or replace these functions as your application requires.
 * 
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore'),
	querystring = require('querystring'),
	keystone = require('keystone'),
  PageCategory = keystone.List('PageCategory'),
  Page = keystone.List('Page')


/**
	Initialises the standard view locals
	
	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/

exports.initLocals = function(req, res, next) {
	
	var locals = res.locals;

  // Dynamically generate nav links based on PageCategories.
  keystone.list('PageCategory').model.find().exec(function(err, results) {

    locals.navLinks = [
      { label: 'Home',		key: 'home',		href: '/' }
    ];

    for(i in results) {
      var result = results[i];
      var resultLink = {
        label: result.name,
        key: result.name.toLowerCase(),
        href: '/' + result.name.toLowerCase().replace(/\s/g, "-") + '/',
        dropdown: result.dropdown,
        id: result._id,
        pages: []
      };
      locals.navLinks.push(resultLink);
    }

    // Build dropdown menus dynamically based on pages.
    keystone.list('Page').model.find().exec(function(err, pages) {
      for(i in pages) {
        var page = pages[i];
        if(!page.landing) {
          var pageLink = {
            name: page.slug,
            category: page.category,
            url: page.slug.toLowerCase().replace(/\s/g, "-") + '/'
          };
          for(j in locals.navLinks) {
            if(locals.navLinks[j].id) {
              if(pageLink.category.toString() == locals.navLinks[j].id.toString()) {
                locals.navLinks[j].pages.push(pageLink);
              }
            }
          }
        }
      }

      console.log(locals.navLinks);

      // Set user.
      locals.user = req.user;

      // Done.
      next();

    });

  });
	
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {
	
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
	
	next();
	
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {
	
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
	
};
