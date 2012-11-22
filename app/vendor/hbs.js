define({
  load: function(name, req, load, config) {
    console.log('text!templates/' + name);
    req(['Ember', 'text!templates/' + name + '.handlebars'], function(Ember, text) {
      load(Ember.Handlebars.template(Ember.Handlebars.precompile(text)));
    });
  }
});
