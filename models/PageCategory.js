var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var PageCategory = new keystone.List('PageCategory');

PageCategory.add({
	name: { type: String, required: true, index: true, initial: true },
  dropdown: { type: Boolean, index: true, initial: true },
  title: { type: String, required: true, index: true, initial: true },
  slug: { type: String, required: true, index: true, initial: true },
  h1: { type: String, initial: true, required: true, index: true },
  h2: { type: String, required: false, index: true, initial: true },
  content: { type: Types.Html, wysiwyg: true, height: 400, required:true, initial:true },
  landing: { type: Boolean, label: 'Landing Page', required:true, initial: true, index: true }
});

/**
 * Registration
 */

PageCategory.defaultColumns = 'name';
PageCategory.register();
