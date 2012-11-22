define(['App', 'DS'], function(App, DS) {
  return App.List = DS.Model.extend({
    name: DS.attr('string'),
    path: DS.attr('string'),
    path: DS.attr('number')
  });
});
