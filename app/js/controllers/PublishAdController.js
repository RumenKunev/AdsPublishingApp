'use strict';

angular.module("AdsPublisher")
    .controller("PublishAdController", ['$scope', 'authenticationData', 'adsData', function PublishAdController ($scope, authenticationData, adsData){

        $scope.isLogged = authenticationData.isLogged();

        $scope.displayUsername = function displayUsername(){
            var username = '';
            if($scope.isLogged){
                username = authenticationData.getAuthenticationToken().username;
            }
            return username;
        }

        $scope.allTowns = adsData.getAllTowns();
        $scope.allCategories = adsData.getAllCategories();

    }]
);
