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
            .when('/user/ads/delete/:id',{
                templateUrl: '/partials/deleteAdView.html',
                controller: 'DeleteAdController'
            })
            .when('/user/ads/edit/:id',{
                templateUrl: '/partials/editAdView.html',
                controller: 'EditAdController'
            })
            .otherwise({redirectTo: '/'})
    })
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api');
