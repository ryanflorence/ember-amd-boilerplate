define(['Ember', 'App', 'hbs!application'], function(Ember, App, template) {
  App.ApplicationView = Ember.View.extend({
    template: template
  });
});
