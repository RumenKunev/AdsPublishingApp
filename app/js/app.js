'use strict';


angular.module("AdsPublisher", ['ngResource', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/showAllAds',{
                templateUrl: '/partials/allAdsList.html'
            })
            .when('/login',{
                templateUrl: '/partials/login.html'
            })
            .when('/register',{
                templateUrl: '/partials/register.html'
            })
            .otherwise({redirectTo: '/'})
    });
