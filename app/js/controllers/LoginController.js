'use strict';

angular.module("AdsPublisher")
    .controller("LoginController", ['$scope', '$location', 'userData', function LoginController ($scope, $location, userData){

        $scope.login = function login (user) {
            userData.loginUser(user)
                .$promise
                .then(function(responce){
                    $location.path('/');
                });
        }
    }]
);