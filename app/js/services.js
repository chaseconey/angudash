'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .factory('EpiUtils', function __factory (){
        return {
            generate: function() {
                return Math.random().toString(36).slice(2);
            }
        };
    })
    .value('version', '0.1');
