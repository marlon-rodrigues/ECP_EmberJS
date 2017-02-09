/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    minifyJS: {
      enabled: false //TODO - enable it before going to prod
    },
    minifyCSS: {
      enabled: false //TODO - enable it before going to prod
    }
  });

    //import libraries css files
  app.import('bower_components/owl.carousel/dist/assets/owl.carousel.min.css');
  app.import('bower_components/owl.carousel/dist/assets/owl.theme.default.min.css');

    //import libraries js files
  app.import('bower_components/modernizr/modernizr.js');
  app.import('bower_components/fancybox/source/jquery.fancybox.pack.js');
  app.import("bower_components/fancybox/source/helpers/jquery.fancybox-media.js");  
  app.import("bower_components/owl.carousel/dist/owl.carousel.min.js");
  app.import("bower_components/matchHeight/dist/jquery.matchHeight.js");

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
