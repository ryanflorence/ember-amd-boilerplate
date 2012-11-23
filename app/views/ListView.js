define(['Ember', 'App', 'hbs!list'], function(Ember, App, template) {
  return App.ListView = Ember.View.extend({
    template: template
  });
});
