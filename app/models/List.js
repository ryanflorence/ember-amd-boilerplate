define(['App', 'DS'], function(App, DS) {
  App.List = DS.Model.extend({
    name: DS.attr('string'),
    items: DS.hasMany('App.Item', {embedded: true})
  });
  DS.RESTAdapter.map('App.List', { items: { embedded: 'load' } });
  return App.List;
});
