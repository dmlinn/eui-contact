/*
 * Contact Form
 * 
 * By Daniel Linn
 * Filename: router.js
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'views/add_contact',
  'views/view_contacts'
], function($, _, Backbone, AddContactView, ViewContactsView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      ''       : 'showAddContact',
      'page2'  : 'showViewContact'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    console.log('router');
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('route:showAddContact', function(){
      console.log('home');
      var homeView = new AddContactView();
      homeView.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('route:showViewContact', function(){
      console.log('page2');
      var viewContactsView = new ViewContactsView();
      viewContactsView.render();
    });

    Backbone.history.start({ pushState: true });



    $(document).on("click", "a[href^='/']", function(event){
      event.preventDefault();
      app_router.navigate($(event.target).attr("href"), {trigger: true});
    });
  };
  return {
    initialize: initialize
  };
});