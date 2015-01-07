'use strict';

angular.module("AdsPublisher")
    .controller("RegisterController", ['$scope', 'adsData', 'userData', function RegisterController ($scope, adsData, userData){
        $scope.allTowns = adsData.getAllTowns();

        $scope.register = function register (user){
            userData.registerUser(user)
        };
    }]
);