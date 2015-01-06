'use strict';

angular.module("AdsPublisher")
    .controller("RegisterController", ['$scope', 'getData', 'userData', function RegisterController ($scope, getData, userData){
        $scope.allTowns = getData.getAllTowns();

        $scope.register = function(user){
            userData.registerUser(user)
        }
    }]
);