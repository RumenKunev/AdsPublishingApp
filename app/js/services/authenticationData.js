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

            if(userToken){
                headers.Authorization = 'Bearer ' + userToken.access_token;
            }

            return headers;
        }

        function isAdmin(){
            var userToken = getAuthenticationToken();

            return userToken.isAdmin;
        }

        function isLogged(){
            return !!getAuthenticationToken();
        }

        return {
            saveAuthenticationToken : saveAuthenticationToken,
            getAuthenticationToken : getAuthenticationToken,
            removeAuthenticationToken: removeAuthenticationToken,
            getHeaders: getHeaders,
            isAdmin: isAdmin,
            isLogged: isLogged
        }
});