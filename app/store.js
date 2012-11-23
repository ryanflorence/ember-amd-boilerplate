define(['App', 'DS'], function(App, DS) {
  return App.store = DS.Store.create({
    revision: 8,
    adapter: DS.RESTAdapter.create({
      bulkCommit: false,
      url: 'http://high-robot-9464.herokuapp.com'
    })
  });
});
