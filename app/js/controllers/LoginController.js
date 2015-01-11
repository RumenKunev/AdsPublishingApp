'use strict';

angular.module("AdsPublisher")
    .controller("LoginController", ['$scope', '$location', 'notifyService', 'userData', function LoginController ($scope, $location, notifyService, userData){

        $scope.login = function login (user) {
            userData.loginUser(user)
                .$promise
                .then(function(responce){
                    notifyService.showInfo('Login successful!');
                    $location.path('/');
                });
        }
    }]
);