'use strict';


angular.module("AdsPublisher", ['ngResource', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when ('/',{
                templateUrl: '/index.html'})
            .when('/partial1',{
                templateUrl: '/partials/partial1.html'
            })
            .otherwise({redirectTo: '/'})
    });
