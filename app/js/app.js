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
            .when('/user/ads/publish',{
                templateUrl: '/partials/publishAdView.html',
                controller: 'PublishAdController'
            })
            .when('/user/ads',{
                templateUrl: '/partials/userAdsList.html',
                controller: 'UserAdsListController'
            })
            .otherwise({redirectTo: '/'})
    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api');
