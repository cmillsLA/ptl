var keystone = require('keystone'),
  async = require('async');

exports = module.exports = function(req, res) {
	
	var locals = res.locals,
		view = new keystone.View(req, res);
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'category';
  locals.data = {
    pages: [],
    parent: req.url,
    category: []
  };

  // Load all categories
  view.on('init', function(next) {

    keystone.list('PageCategory').model.findOne({slug: req.params.category}).exec(function(err, result) {

      var catId = result._id;

      locals.data.category = result;

      keystone.list('Page').model.find({category: catId}).sort('name').exec(function(err, results) {

        if (err || !results.length) {
          return next(err);
        }

        locals.data.pages = results;

        next(err);

      });


    });

  });

  // Render the view
	view.render('category');
	
};
