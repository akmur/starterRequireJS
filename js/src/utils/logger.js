/* globals define*/

define([], function () {

  var publicAPIs = {};

  publicAPIs.consoleLog = function (text) {
    console.log(text);
  };

    return publicAPIs;
});