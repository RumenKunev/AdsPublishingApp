'use strict';

angular.module("AdsPublisher")
    .factory('getData', function($resource){
        var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads', {id: '@id'});

        return{
            getAllAds : function(){
                return resource.get();
            }
        }
    });
