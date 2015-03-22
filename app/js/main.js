/*
 * Contact Form
 * 
 * By Daniel Linn
 * Filename: main.js
 */

require.config({
  
  paths: {
    // Define library paths
    jquery        : 'lib/jquery.min',
    serializejson : 'lib/jquery.serializejson.min',
    underscore    : 'lib/underscore-min',
    text          : 'lib/text',
    backbone      : 'lib/backbone-min',
    country_list  : 'lib/country-list',
    provinces     : 'lib/provinces.json',
    foundation    : 'lib/foundation',
    alert         : 'lib/foundation.alert',

    // Define app paths
    contact_model       :'models/contact_model',
    contact_collection  :'collections/contact_collection'
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      "backbone": {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
      },

      "underscore": {
          exports: "_"
      },

      "country_list": {
          exports: "countryList"
      },

      "serializejson": {
          deps: ["jquery"],
          exports: "serializeJSON"
      },

      "foundation": {
          deps: ["jquery"],
          exports: "foundation"
      },

      "alert": {
          deps: ["jquery", "foundation"],
          exports: "alert"
      }

  } // end Shim Configuration

});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
