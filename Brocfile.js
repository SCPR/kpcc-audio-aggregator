/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

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

// Import CSS Dependencies
app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/AdminLTE-master/css/font-awesome.css');
app.import('vendor/AdminLTE-master/css/ionicons.css');
app.import('vendor/AdminLTE-master/css/AdminLTE.css');

// Import Javascript Dependencies
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/AdminLTE-master/js/AdminLTE/app.js');

// Import Other Asset Dependencies
// Copy only the relevant files:
var iconFonts = pickFiles('vendor/AdminLTE-master/fonts', {
   srcDir: '/',
   files: ['*.woff', '*.eot', '*.ttf', '*.svg'],
   destDir: '/fonts'
});

// Merge the app tree and our new font assets.
module.exports = mergeTrees([app.toTree(), iconFonts]);
