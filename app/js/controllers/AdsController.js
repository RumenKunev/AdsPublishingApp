'use strict';

angular.module("AdsPublisher")
    .controller("AdsController", ['$scope', 'authenticationData', 'adsData', function AdsController ($scope, authenticationData, adsData){
        $scope.allAds = adsData.getAllAds();
        $scope.allTowns = adsData.getAllTowns();
        $scope.allCategories = adsData.getAllCategories();



        $scope.isLogged = authenticationData.isLogged();
        //$scope.username = authenticationData.getAuthenticationToken().username;

    }]
);
