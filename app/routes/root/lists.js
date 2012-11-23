define([
  'Ember',
  'models/ListSummary',
  'store',
  'routes/root/lists/index',
  'routes/root/lists/list',
], function(Ember, ListSummary, store, index, list) {
  return Ember.Route.extend({
    route: '/lists',
    connectOutlets: function(router) {
      var applicationController = router.get('applicationController');
      applicationController.connectOutlet({
        name: 'lists',
        outletName: 'nav',
        context: App.store.findAll(App.ListSummary)
      });
      router.get('listsController').connectOutlet('newList', Ember.Object.create());
    },
    showList: Ember.Route.transitionTo('list'),
    index: index,
    list: list
  })
});
