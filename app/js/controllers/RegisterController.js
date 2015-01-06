'use strict';

angular.module("AdsPublisher")
    .controller("RegisterController", ['$scope', 'getData', function RegisterController ($scope, getData){
        $scope.allTowns = getData.getAllTowns();

        $scope.register = function(user){
            //TODO implement register
            console.log(user);
        }
    }]
);