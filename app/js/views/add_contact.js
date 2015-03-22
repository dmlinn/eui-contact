/*
 * Contact Form
 * 
 * By Daniel Linn
 * Filename: add_contact.js
 */

define([
  'contact_model',
  'contact_collection',
  'country_list',
  'text!provinces',
  'text!/tpl/add_contact.html'
], function(ContactModel, ContactCollection, countryList, provences, contactsTemplate){

  var HomeView = Backbone.View.extend({

    // Things we can do right away
    initialize: function(){
      this.collection = new ContactCollection();
      this.template = _.template( contactsTemplate );
    },

    // Page element recieving data
    el: $('.content'),

    // Bind events to dom elements
    events: {
     'change #country-select'   : 'countryChange',
     'submit'                   : 'submitForm',
     'click tr'                 : 'getContact'
    },

    countryChange: function(country){

      // Build appropriate provence select depending on country
      var current_provences = Array();

      var provences_json = JSON.parse(provences),
      provence_html = '';

      // Filter provences, build html for select input
      $.each(provences_json, function(index, provence){
        if(provence.country === $('#country-select').val())
          provence_html += "<option value=" + provence.name + ">" + provence.name + "</option> "
      });

      if(provence_html.length > 0){
        $("#provence-select").removeAttr("disabled");
        $('#provence-select').html(provence_html);
      }else{
        // Disable field if no provences exist
        $("#provence-select").attr("disabled", "disabled");
        $('#provence-select').html(provence_html);
      }

    },

    // Submit the form, and re-render the view with new data
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

      // Attempting to use underscore to fill form, but failing miserably.
      // Left code here in case I ever revisit and fix.
      var edit_contact = self.model ? self.model : {};

      this.collection.fetch().done(function(){

        // Using Underscore we can compile our template with data
        var data = {
          'contacts' : self.collection,
          'edit_contact' : edit_contact // Again, does nothing, needs fixing
        }

        var compiledTemplate = self.template;
        // Append our compiled template to this Views "el"
        self.$el.html( compiledTemplate(data) );

        self.countryChange();

      });

      return this;
    },

    getContact: function(ev){
      //Render data to form
      this.model = this.collection.get($(ev.target).parent().attr('data-id'));

      // Ugly workaround for 'edit_contact' data not wanting to populate in template.
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