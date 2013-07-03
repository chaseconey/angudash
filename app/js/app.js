'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/tools', {templateUrl: 'partials/tools.html', controller: 'ToolsCtrl'});
    $routeProvider.when('/tools/:tool', {templateUrl: 'partials/tools.html', controller: 'ToolsCtrl'});
    $routeProvider.otherwise({redirectTo: '/tools'});
  }]);
