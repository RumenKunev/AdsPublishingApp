'use strict';

angular.module("AdsPublisher")
    .factory('adsData', function($resource, baseUrl){
        var resource = $resource(baseUrl + ':url/:adsId', {url: '@url', adsId: '@adsId' }, {
            update: { method: 'PUT'}
        });

        function getAllAds(){
            return resource.get({url: '/ads'})
        }

        function getAllTowns(){
            return resource.query({url: '/towns'})
        }

        function getAllCategories(){
            return resource.query({url: '/categories'})
        }

        return {
            getAllAds: getAllAds,
            getAllTowns: getAllTowns ,
            getAllCategories: getAllCategories
        }
    });
