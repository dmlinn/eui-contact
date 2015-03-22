require.config({
  
  paths: {
    jquery: 'lib/jquery.min',
    underscore: 'lib/underscore-min',
    text: 'lib/text',
    backbone: 'lib/backbone-min'
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      "backbone": {
          deps: ["underscore", "jquery"],
          exports: "Backbone"  //attaches "Backbone" to the window object
      },

      "underscore": {
          exports: "_"  //attaches "Backbone" to the window object
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
