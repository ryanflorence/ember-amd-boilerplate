define(['Ember', 'controllers/SecondController'], function(Ember) {
  return Ember.Route.extend({
    route: '/second',
    connectOutlets: function(router) {
      var data = [1, 2, 3];
      router.get('applicationController').connectOutlet('second', data);
    }
  });
});
