require.config({
  
  paths: {
    jquery        : 'lib/jquery.min',
    serializejson : 'lib/jquery.serializejson.min',
    underscore    : 'lib/underscore-min',
    text          : 'lib/text',
    backbone      : 'lib/backbone-min',
    country_list  : 'lib/country-list',

    contact_model       :'models/contact_model',
    contact_collection  :'collections/contact_collection'
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      "backbone": {
          deps: ["underscore", "jquery"],
          exports: "Backbone"  //attaches "Backbone" to the window object
      },

      "underscore": {
          exports: "_"  //attaches "Backbone" to the window object
      },

      "country_list": {
          exports: "countryList"  //attaches "Backbone" to the window object
      },

      "serializejson": {
          deps: ["jquery"],
          exports: "serializeJSON"  //attaches "Backbone" to the window object
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
