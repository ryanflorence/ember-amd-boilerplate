define(['Ember', 'controllers/FirstController'], function(Ember) {
  return Ember.Route.extend({
    route: '/first',
    connectOutlets: function(router) {
      router.get('applicationController').connectOutlet('first');
    }
  })
});
