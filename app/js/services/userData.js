'use strict';

angular.module("AdsPublisher")
    .factory('userData', function($resource, $location, baseUrl, authenticationData){

        function registerUser (user) {
            var resource = $resource(baseUrl + '/user/register')
                .save(user);
            resource
                .$promise
                .then(function (responce) {
                    authenticationData.saveAuthenticationToken(responce);
                });
            return resource;
        }

        function loginUser (user) {
            var resource = $resource(baseUrl + '/user/login')
                .save(user);
            resource
                .$promise
                .then(function (responce) {
                    authenticationData.saveAuthenticationToken(responce);
                });
            return resource;
        }

        function logoutUser () {
            authenticationData.removeAuthenticationToken();
        }

        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logoutUser: logoutUser
        }
    });
