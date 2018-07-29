/* globals define*/

define(['jquery', 'utils/logger', 'vendor/jqueryPlugin'], function($, logger) {
  'use strict';

  //
  // This App module will return this object
  //
  var publicAPIs = {};


  //
  // Private methods
  //

  var consoleLogger = function(content){
    logger.consoleLog(content);
  };

  var $ajaxGet = function(url, callback){
    $.ajax({
        type: 'GET',
        url: url,
        success: function(data) {
          // call another function on success
          callback(data);
        },
        error: function() {
            // deal with the error
        }
    });
  };

  var handleClick = function(event){
    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('.h1')) {
      $ajaxGet('https://reqres.in/api/users', consoleLogger);
      $('.h1').greenify();
    }
  };

  var eventHandler = function(event){
    if (event.type === 'click'){
      // click
      handleClick(event);
    }

    // if (event.type === 'resize'){
    //   // resize
    //   handleResize(event);
    // }

    // if (event.type === 'scroll'){
    //   // scroll
    //   handleScroll(event);
    // }
  };


  //
  // publicAPIs methods
  //

  publicAPIs.init = function(){
    document.addEventListener('click', eventHandler, false);
  };

  // publicAPIs.ajaxGet = function(url){
  //   var xhr = new XMLHttpRequest();

  //   xhr.onload = function() {
  //     // Process our return data
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       consoleLogger(JSON.parse(xhr.response));
  //     } else {
  //       console.log('The request failed!');
  //     }
  //   };

  //   xhr.open('GET', url);
  //   xhr.send();
  // };

  //
  // Return the publicAPIs APIs
  //

  return publicAPIs;
});