define(['App', 'DS'], function(App, DS) {
  return App.Item = DS.Model.extend({
    name: DS.attr('string'),
    list: DS.belongsTo('App.List')
  });
});
