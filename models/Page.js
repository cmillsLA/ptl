var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Page = new keystone.List('Page');

Page.add({
	title: { type: String, required: true, index: true, initial: true },
  slug: { type: String, required: true, index: true, initial: true },
	h1: { type: String, initial: true, required: true, index: true },
  h2: { type: String, required: false, index: true, initial: true },
  content: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 }
  },
  category: { type: Types.Relationship, ref: 'PageCategory', index: true, required: true, initial:true },
});

/**
 * Registration
 */

Page.defaultColumns = 'title, h1, category, index';
Page.register();
