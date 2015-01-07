'use strict';

angular.module("AdsPublisher")
    .factory('authenticationData', function($cookieStore){

        var tokenKey = 'tokenKey';

        function saveAuthenticationToken (responce){
            $cookieStore.put(tokenKey, responce)
        }

        function getAuthenticationToken (){
            return $cookieStore.get(tokenKey)
        }

        function removeAuthenticationToken (){
            $cookieStore.remove(tokenKey)
        }

        function getHeaders(){
            var headers = {};
            var userToken = getAuthenticationToken();

            headers.Authorization = 'Bearer ' + userToken.access_token;

            return headers;
        }

        return {
            saveAuthenticationToken : saveAuthenticationToken,
            getAuthenticationToken : getAuthenticationToken,
            removeAuthenticationToken: removeAuthenticationToken,
            getHeaders: getHeaders
        }
});