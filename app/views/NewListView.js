define([
  'Ember',
  'App',
  'hbs!newList',
  'models/ListSummary',
  'store'
], function(Ember, ListsView, template, ListSummary, store) {
  return App.NewListView = Ember.View.extend({
    template: template,
    submit: function(event) {
      event.preventDefault();
      var placeholder = this.get('controller.content');
      ListSummary.createRecord({name: placeholder.get('name')});
      store.commit();
      placeholder.set('name', null);
    }
  });
});
