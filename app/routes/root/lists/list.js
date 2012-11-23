define([
  'Ember',
  'models/List',
  'models/Item',
  'controllers/ListController'
], function(Ember, List, Item) {
  return Ember.Route.extend({
    route: '/:list_id',
    showLists: Ember.Route.transitionTo('lists.index'),
    connectOutlets: function(router, list) {
      router.get('applicationController').connectOutlet({
        name: 'list',
        outletName: 'content',
        context: App.List.find(list.id)
      });
    }
  })
});
