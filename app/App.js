// The Application Object
// All other Ember modules will be added to this object.
define(['Ember'], function(Ember){
  return this.App = Ember.Application.create({
    // since we're loading modules async, we don't want ember to do its
    // autoinit magic, we'll initialize ourselves in main.js when we
    // know for sure all of our routes and modules are attached to the
    // the application object
    autoinit: false
  });
});
