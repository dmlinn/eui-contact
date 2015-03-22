/*
 * Contact Form
 * 
 * By Daniel Linn
 * Filename: contact_collection.js
 */

define([
  'contact_model'
], function(ContactModel){

  var ContactCollection = Backbone.Collection.extend({
      model: ContactModel,
      url: "/api/contact",
  });

  // Our module now returns our view
  return ContactCollection;

});