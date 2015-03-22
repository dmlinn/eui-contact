/*
 * Contact Form
 * 
 * By Daniel Linn
 * Filename: contact_model.js
 */

define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  Contact = Backbone.Model.extend({
    url : function() {
      // Important! It's got to know where to send its REST calls. 
      // In this case, POST to '/donuts' and PUT to '/donuts/:id'
      return this.id ? '/api/contact/' + this.id : '/api/contact'; 
    },
    defaults: {
        fname: '',
        lname: '',
        address: '',
        country: '',
        city: '',
        state_provence: '',
        postal_code: '',
        phone: '',
        email: '',
    }
  });

  return Contact;
});