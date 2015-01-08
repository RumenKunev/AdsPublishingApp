'use strict';

angular.module("AdsPublisher")
    .controller("LogoutController", ['$scope', '$location', 'userData',
        function LogoutController ($scope, $location, userData){

        $scope.logout = function logout () {
            userData.logoutUser();
        }
    }]
);