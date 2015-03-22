// Filename: views/project/list
define([
  'contact_model',
  'contact_collection',
  'country_list',
  'text!/tpl/add_contact.html'
], function(ContactModel, ContactCollection, countryList, contactsTemplate){

  var HomeView = Backbone.View.extend({

    initialize: function(){
      this.collection = new ContactCollection();
      this.template = _.template( contactsTemplate );
    },

    el: $('.content'),

    events: {
     'change #country-select'   : 'countryChange',
     'submit'                   : 'submitForm',
     'click tr'                 : 'getContact'
    },

    countryChange: function(ev){
      if($(ev.currentTarget).val() == "US" || $(ev.currentTarget).val() == "CA"){
        $(".state_provence").parent().show();
      }else{
        $(".state_provence").parent().hide();
      }
    },

    submitForm: function(ev){

      var data = $('form').serializeJSON() ;

      if(!this.model){
        this.model = new ContactModel();
      }
      
      this.model.set(data);

      this.model.save();

      this.collection.add(this.model);

      this.render();

      return false;
    },

    render: function(){

      var self = this;

      var edit_contact = self.model ? self.model : {};

      this.collection.fetch().done(function(){

        // Using Underscore we can compile our template with data
        var data = {
          'contacts' : self.collection,
          'edit' : edit_contact
        }

        console.log(data);

        var compiledTemplate = self.template;
        // Append our compiled template to this Views "el"
        self.$el.html( compiledTemplate(data) );

      });

      return this;
    },

    getContact: function(ev){
      //Render data to form
      this.model = this.collection.get($(ev.target).parent().attr('data-id'));

      $('.id').val(this.model.get('id'));
      $('.fname').val(this.model.get('fname'));
      $('.lname').val(this.model.get('lname'));
      $('.address').val(this.model.get('address'));
      $('.country').val(this.model.get('country'));
      $('.city').val(this.model.get('city'));
      $('.state_provence').val(this.model.get('state_provence'));
      $('.postal_code').val(this.model.get('postal_code'));
      $('.phone').val(this.model.get('phone'));
      $('.email').val(this.model.get('email'));
    }

  });

  // Our module now returns our view
  return HomeView;
});