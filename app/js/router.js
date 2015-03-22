define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/page2'
], function($, _, Backbone, HomeView, Page2View){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      ''       : 'showHome',
      'page2'  : 'showPage2'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    console.log('router');
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('route:showHome', function(){
      console.log('home');
      var homeView = new HomeView();
      homeView.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('route:showPage2', function(){
      console.log('page2');
      var page2View = new Page2View();
      page2View.render();
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