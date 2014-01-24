'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ToolsCtrl', [
    '$scope',
    '$routeParams',
    function($scope, $routeParams) {

    $scope.tools = [
        { name: "MD5 Hash", id: "md5" },
        { name: "MySQL Create", id: "mysql" }
    ];

    $scope.template = $routeParams.tool || "";

    $scope.setTemplate = function() {
      $scope.template = "partials/tools/" + this.tool.id + ".html";
    };

  }])
  .controller('ToolCtrl', [
    '$scope',
    'EpiUtils',
    function($scope, utils) {

    // Tool Functions
    $scope.setHash = function() {
      this.hashed = md5(this.password);
    };

    $scope.gen = function() {
      this.password = utils.generate();
    };

  }]);