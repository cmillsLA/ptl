// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	
<<<<<<< HEAD
	'name': 'Part Time Landlord',
	'brand': 'Part Time Landlord',
=======
	'name': 'Real Estate Investing',
	'brand': 'Real Estate Investing',
>>>>>>> 4a001b2cdb1fac9347094db8ad6b768b87c49d73
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	
	'session': true,
	'auth': true,
	'user model': 'User',
<<<<<<< HEAD
	'cookie secret': 'hS.Z}Tgaq^A>F--6;La:+zdtwScu$PGW.,p!Gz9FWdJ4J-8-Z[8@,[?d`SGQEOaa'
=======
	'cookie secret': '=9@CAA2oO5&3N)@t.L_6|x@sr{m6_L#$2B.I%a0&F1,X&eN{SO4@bL$TzT:LzU{!'
>>>>>>> 4a001b2cdb1fac9347094db8ad6b768b87c49d73
	
});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
<<<<<<< HEAD
	'pages': ['pages', 'page-categories'],
=======
	'posts': ['posts', 'post-categories'],
>>>>>>> 4a001b2cdb1fac9347094db8ad6b768b87c49d73
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
