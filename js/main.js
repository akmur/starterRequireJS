/* globals require*/

require.config({
    paths: {
      'jquery': 'vendor/jquery'
    },
    shim: {
      'vendor/jqueryPlugin': ['jquery']
    }
});

require(['modules/app'],function(app){
  app.init();
});