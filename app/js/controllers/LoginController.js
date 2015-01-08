'use strict';

angular.module("AdsPublisher")
    .controller("LoginController", ['$scope', 'userData', function LoginController ($scope, userData){

        $scope.login = function login (user) {
            userData.loginUser(user)
        }
    }]
);