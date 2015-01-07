'use strict';


angular.module("AdsPublisher", ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '/partials/allAdsList.html'
            })
            .when('/login',{
                templateUrl: '/partials/login.html'
            })
            .when('/register',{
                templateUrl: '/partials/register.html'
            })
            .otherwise({redirectTo: '/'})
    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api');
