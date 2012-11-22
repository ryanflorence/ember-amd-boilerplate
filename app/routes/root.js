// Unfortunately repetative stuff here...
define([
  'Ember',
  'routes/root/index',
  'routes/root/lists',
  'routes/root/second',
  'controllers/ApplicationController'
], function(Ember, index, lists, second) {
  return Ember.Route.extend({
    index: index,
    lists: lists,
    second: second,
    showLists: Ember.Route.transitionTo('lists'),
    showSecondView: Ember.Route.transitionTo('second')
  })  
});
