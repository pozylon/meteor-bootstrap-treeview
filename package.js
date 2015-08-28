Package.describe({
  name: 'kaso:bootstrap-treeview',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Wrapper around bootstrap-treeview NPM package of https://github.com/jonmiles/bootstrap-treeview',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('bootstrap-treeview.js');
  api.addFiles('bootstrap-treeview-tests.js');
  api.addFiles([
    '.npm/package/node_modules/bootstrap-treeview/dist/bootstrap-treeview.min.css',
    '.npm/package/node_modules/bootstrap-treeview/dist/bootstrap-treeview.min.js'], 'client');
});

Package.onTest(function(api) {
  //api.use('tinytest');
  //api.use('kaso:bootstrap-treeview');
  //api.addFiles('bootstrap-treeview-tests.js');
});

Npm.depends({
  "bootstrap-treeview": "1.2.0"
});