'use strict';

angular.module("AdsPublisher")
    .factory('getData', function($resource){
        var resource = $resource('http://softuni-ads.azurewebsites.net/api:id', {id: '@id'});

        return {
            getAllAds: function(){
                return resource.get({id: '/ads'})
            },
            getAllTowns: function(){
                return resource.query({id: '/towns'})
            },
            getAllCategories: function(){
                return resource.query({id: '/categories'})
            }
        }
    });
