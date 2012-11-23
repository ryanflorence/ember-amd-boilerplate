define(['Ember', 'App', 'hbs!application'], function(Ember, App, template) {
  return App.ApplicationView = Ember.View.extend({
    template: template
  });
});
