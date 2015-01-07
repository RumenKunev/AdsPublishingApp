'use strict';

angular.module("AdsPublisher")
    .controller("GetAllAdsController", ['$scope', 'getAdsData', function GetAllAdsController ($scope,getAdsData){

        $scope.allAds = getAdsData.getAllAds();
        $scope.allTowns = getAdsData.getAllTowns();
        $scope.allCategories = getAdsData.getAllCategories();

    }]
);
