'use strict';

angular.module("AdsPublisher")
    .controller("GetAllAdsController", ['$scope', 'getData', function GetAllAdsController ($scope,getData){

        $scope.allAds = getData.getAllAds;
        $scope.allTowns = getData.getAllTowns;

    }]
);
