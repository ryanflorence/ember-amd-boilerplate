// Unfortunately repetative stuff here...
define([
  'Ember',
  'routes/root/index',
  'routes/root/first',
  'routes/root/second',
  'controllers/ApplicationController'
], function(Ember, index, first, second) {
  return Ember.Route.extend({
    index: index,
    first: first,
    second: second,
    showFirstView: Ember.Route.transitionTo('first'),
    showSecondView: Ember.Route.transitionTo('second')
  })  
});
