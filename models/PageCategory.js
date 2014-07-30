var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var PageCategory = new keystone.List('PageCategory');

PageCategory.add({
	name: { type: String, required: true, index: true, initial: true },
  dropdown: { type: Boolean, index: true, initial: true }
});

/**
 * Registration
 */

PageCategory.defaultColumns = 'name';
PageCategory.register();
