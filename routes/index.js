/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
<<<<<<< HEAD
  /*app.get('/rvb-calculator/', routes.views.category);
  app.get('/rvb-calculator/:page/', routes.views.page);
  app.get('/real-estate-investing/', routes.views.category);
  app.get('/real-estate-investing/:page/', routes.views.page);
  app.get('/mortgages/', routes.views.category);
  app.get('/mortgages/:page/', routes.views.page);
  app.get('/getting-started/', routes.views.category);
  app.get('/getting-started/:page/', routes.views.page);*/
  app.get('/:category/', routes.views.category);
  app.get('/:category/:page/', routes.views.page);
	//app.all('/contact//', routes.views.contact);
=======
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.all('/contact', routes.views.contact);
>>>>>>> 4a001b2cdb1fac9347094db8ad6b768b87c49d73
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
