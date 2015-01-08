'use strict';


angular.module("AdsPublisher", ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '/partials/allAdsList.html',
                controller: 'AdsController'
            })
            .when('/login',{
                templateUrl: '/partials/login.html'
            })
            .when('/register',{
                templateUrl: '/partials/register.html'
            })
            .when('/logout',{
                templateUrl: '/partials/allAdsList.html'
            })
            .otherwise({redirectTo: '/'})
    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api');
