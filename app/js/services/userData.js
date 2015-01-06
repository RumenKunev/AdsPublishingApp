'use strict';

angular.module("AdsPublisher")
    .factory('userData', function($resource, baseUrl){

        return {
            loginUser: function(user)//TODO user session token
             {
                 return $resource(baseUrl + '/user/login')
                    .save(user);
                },

            registerUser: function(user){
                return $resource(baseUrl + '/user/register')
                    .save(user);
                //TODO save session token
            }
        }
    });
