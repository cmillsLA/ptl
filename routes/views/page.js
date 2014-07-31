var keystone = require('keystone'),
  async = require('async');

exports = module.exports = function(req, res) {

  var locals = res.locals,
    view = new keystone.View(req, res);

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'page';
  locals.data = {
    page: [],
    category: null
  };

  // Load all categories
  view.on('init', function(next) {

    keystone.list('Page').model.find({slug: req.params.page}).exec(function(err, results) {

      if (err || !results.length) {
        console.log('error');
        return next(err);
      }

      locals.data.page = results[0];

      keystone.list('PageCategory').model.findOne({_id: locals.data.page.category}).exec(function(err, catResult) {
        console.log(catResult);
        locals.data.category = catResult;
        next(err);
      });

    });

  });

  // Render the view
  view.render('page');

};
