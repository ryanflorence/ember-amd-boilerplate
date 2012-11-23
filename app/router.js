// The application router
//
// This object is essentially a state machine, as the user navigates around the
// site, the objects required for each state are initialized, the views updated,
// and the url changes automatically.
//
// The syntax for routers is changing, see: https://gist.github.com/3981133
define(['Ember', 'App', 'routes/root'], function(Ember, App, root){
  App.Router = Ember.Router.extend({
    enableLogging: true,
    root: root
  });
});
