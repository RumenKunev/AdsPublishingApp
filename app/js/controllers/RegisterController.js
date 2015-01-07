'use strict';

angular.module("AdsPublisher")
    .controller("RegisterController", ['$scope', 'getAdsData', 'userData', function RegisterController ($scope, getAdsData, userData){
        $scope.allTowns = getAdsData.getAllTowns();

        $scope.register = function register (user){
            userData.registerUser(user)
        };

        $scope.login = function login (user){
            userData.loginUser(user)
        }
    }]
);