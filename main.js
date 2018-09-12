/**
 * Interactive Linter Copyright (c) 2015 Miguel Castillo.
 *
 * Licensed under MIT
 */


define(function (require, exports, module) {
  "use strict";

  var AppInit = brackets.getModule("utils/AppInit");
  var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

  ExtensionUtils.loadStyleSheet(module, "main.css");
  AppInit.appReady(appReady);

  /**
   * Function that gets called when Brackets is loaded and ready
   */
  function appReady() {

    var $container = $("<div></div>", {
        id: "project-working-container"
    });

    var $splitLeft = $("<div></div>", {
        id: "splitLeft"
    });
    $container.append($splitLeft);

    var $splitRight = $("<div></div>", {
        id: "splitRight"
    });
    $container.append($splitRight);


    $container.appendTo($("#sidebar"));

    $("#project-files-header").appendTo($("#splitLeft"));
    $("#project-files-container").appendTo($("#splitLeft"));


    $("#working-set-list-container").appendTo($("#splitRight"));
    $(".working-set-splitview-btn, .working-set-option-btn").appendTo($("#splitRight"));
    
  }
});
