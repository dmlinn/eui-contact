// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!/tpl/home.html'
], function($, _, Backbone, homeTemplate){
  var HomeView = Backbone.View.extend({
    el: $('.content'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( homeTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.html( compiledTemplate );
    }
  });
  // Our module now returns our view
  return HomeView;
});