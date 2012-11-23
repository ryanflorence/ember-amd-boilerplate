// Unfortunately repetative stuff here...
define([
  'Ember',
  'routes/root/index',
  'routes/root/lists',
  'controllers/ApplicationController'
], function(Ember, index, lists) {
  return Ember.Route.extend({
    index: index,
    lists: lists
  })  
});
