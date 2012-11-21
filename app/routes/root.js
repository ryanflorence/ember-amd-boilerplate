define([
  'Ember',
  'controllers/ApplicationController',
  'controllers/SecondController'
], function(Ember) {
  return Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    }),
    second: Ember.Route.extend({
      route: '/second',
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('second');
      }
    }),
    showSecondView: Ember.Route.transitionTo('second')
  })  
});
