require.config({

  // Define some paths, could instead have local copies of all the CDN stuff
  paths: {
    jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery',
    Handlebars: 'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars',
    Ember: 'http://cdnjs.cloudflare.com/ajax/libs/ember.js/1.0.0-pre.2/ember-1.0.0-pre.2',
    DS: 'vendor/ember-data',
    text: 'vendor/text',
    hbs: 'vendor/hbs'
  },

  // shim non-amd globals
  shim: {
    Ember: {
      deps: ['Handlebars', 'jquery'],
      exports: 'Ember'
    },
    DS: {
      deps: ['Ember'],
      exports: 'DS'
    }
  }
});

// Note, as you look around the source, that each module builds up the `App`
// object. Ember initializes these modules for you as the user transitions
// through the application's various states defined on the router. Indeed, the
// router could easily be named `StateManager` instead.
//
// The router's dependency tree should include the rest of the app, so there's
// very little we have to load here to initialize it.
define(['App', 'router', 'store'], function(App, router, store){
  App.initialize();
});
