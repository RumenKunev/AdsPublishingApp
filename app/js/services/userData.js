'use strict';

angular.module("AdsPublisher")
    .factory('userData', function($resource, baseUrl, authenticationData){

        function registerUser (user) {
            return $resource(baseUrl + '/user/register')
                .save(user)
                .$promise
                .then(function (responce) {
                    authenticationData.saveAuthenticationToken(responce);
                });
        }

        function loginUser (user) {
            return $resource(baseUrl + '/user/login')
                .save(user)
                .$promise
                .then(function (responce) {
                    authenticationData.saveAuthenticationToken(responce);
                });
        }

        function logoutUser () {
            authenticationData.removeAuthenticationToken();
        }

        return {
            registerUser: registerUser,
            loginUser: loginUser

        }
    });
