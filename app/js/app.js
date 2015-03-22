/*
 * Contact Form
 * 
 * By Daniel Linn
 * Filename: app.js
 */

define([ 
  //Default app libraries
  'jquery',
  'serializejson',
  'underscore',
  'backbone',
  'router'
  ], function($, serializeJSON, _, Backbone, Router){

    var initialize = function(){
      // Pass in our Router module and call it's initialize function
      Router.initialize();
    }

    return {
      initialize: initialize
    };

  });