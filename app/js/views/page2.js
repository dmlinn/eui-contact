// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!/tpl/page2.html'
], function($, _, Backbone, page2Template){
  var HomeView = Backbone.View.extend({
    el: $('.content'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {};
      var compiledTemplate = _.template( page2Template, data );
      // Append our compiled template to this Views "el"
      this.$el.html( compiledTemplate );
    }
  });
  // Our module now returns our view
  return HomeView;
});