define([
  'Ember',
  'controllers/ApplicationController',
  'controllers/FirstController',
  'controllers/SecondController'
], function(Ember) {
  return Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      redirectsTo: 'first'
    }),
    first: Ember.Route.extend({
      route: '/first',
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('first');
      }
    }),
    second: Ember.Route.extend({
      route: '/second',
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('second');
      }
    }),
    showFirstView: Ember.Route.transitionTo('first'),
    showSecondView: Ember.Route.transitionTo('second')
  })  
});
