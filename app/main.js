require.config({
  paths: {
    jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery',
    Handlebars: 'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars',
    Ember: 'http://cdnjs.cloudflare.com/ajax/libs/ember.js/1.0.0-pre.2/ember-1.0.0-pre.2',
    text: 'vendor/text',
    hbs: 'vendor/hbs'
  },
  
  shim: {
    Ember: {
      deps: ['Handlebars', 'jquery'],
      exports: 'Ember'
    }
  }
});

require(['App', 'router'], function(App, router){
  App.initialize();
});
