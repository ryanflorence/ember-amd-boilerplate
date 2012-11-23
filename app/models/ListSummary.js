define(['App', 'DS'], function(App, DS) {
  // lame, ember-data doesn't understand how to refresh partially loaded stuff.
  // see https://github.com/emberjs/data/issues/51
  // here we have a seperate model for the summaries
  return App.ListSummary = DS.Model.extend({
    name: DS.attr('string')
  }).reopenClass({
    url: 'list'
  });
});
