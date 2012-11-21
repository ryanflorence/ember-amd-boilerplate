define(['Ember', 'App', 'routes/root'], function(Ember, App, root){
  App.Router = Ember.Router.extend({
    root: root
  });
});
