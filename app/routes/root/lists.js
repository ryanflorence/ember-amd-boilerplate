define(['Ember', 'controllers/ListsController'], function(Ember) {
  return Ember.Route.extend({
    route: '/lists',
    connectOutlets: function(router) {
      router.get('applicationController').connectOutlet('lists');
    }
  })
});
