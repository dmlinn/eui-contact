// Filename: views/project/list
define([
  'contact_collection',
  'text!/tpl/view_contacts.html'
], function(ContactCollection, viewContactsTemplate){
  var HomeView = Backbone.View.extend({        

    initialize: function(){
      this.collection = new ContactCollection();
      this.template = _.template( viewContactsTemplate );
      this.listenTo( this.collection, 'add', this.render );
    },

    el: $('.content'),

    render: function(){

      var self = this;

      this.collection.fetch().done(function(){

        // Using Underscore we can compile our template with data
        var data = {
          'contacts' : self.collection
        }

        console.log(data);

        var compiledTemplate = self.template;
        // Append our compiled template to this Views "el"
        self.$el.html( compiledTemplate(data) );

      });

      return this;
    }

  });
  // Our module now returns our view
  return HomeView;
});