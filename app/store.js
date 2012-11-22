define(['App', 'DS'], function(App, DS) {
  App.store = DS.Store.create({
    revision: 7,
    adapter: DS.RESTAdapter.create({
      bulkCommit: false,
      url: 'http://high-robot-9464.herokuapp.com'
    })
  });
});
