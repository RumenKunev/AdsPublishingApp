'use strict';

angular.module("AdsPublisher")
    .controller("RegisterController", ['$scope', '$location', 'adsData', 'userData', function RegisterController ($scope, $location, adsData, userData){
        $scope.allTowns = adsData.getAllTowns();

        $scope.register = function register (user) {
            userData.registerUser(user)
                .$promise
                .then(function(responce){
                    $location.path('/');
                });
        }
    }]
);