'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: false,
    },
  });
  app.import('node_modules/jquery/dist/jquery.js');
  app.import('node_modules/popper.js/dist/umd/popper.js');
  app.import('node_modules/popper.js/dist/umd/popper-utils.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  // app.import('node_modules/jquery/dist/jquery.js');
  // app.import('node_modules/popper.js/dist/umd/popper.js');
  // app.import('node_modules/popper.js/dist/umd/popper-utils.js');
  // app.import('node_modules/bootstrap/dist/js/bootstrap.js');
  // app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');

  // app.import('node_modules/jquery/dist/jquery.js');
  // app.import('node_modules/popper.js/dist/umd/popper.js');
  // app.import('node_modules/popper.js/dist/umd/popper-utils.js');
  // app.import('node_modules/bootstrap/dist/js/bootstrap.js');

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
