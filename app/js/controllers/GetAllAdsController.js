'use strict';

angular.module("AdsPublisher")
    .controller("GetAllAdsController", ['$scope', 'adsData', function GetAllAdsController ($scope,adsData){

        $scope.allAds = adsData.getAllAds();
        $scope.allTowns = adsData.getAllTowns();
        $scope.allCategories = adsData.getAllCategories();

    }]
);
