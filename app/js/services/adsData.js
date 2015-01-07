'use strict';

angular.module("AdsPublisher")
    .factory('adsData', function($resource){
        var resource = $resource('http://softuni-ads.azurewebsites.net/api:url/:adsId', {url: '@url', adsId: '@adsId' }, {
            update: { method: 'PUT'}
        });

        function getAllAds(){
            return resource.get({url: '/ads'})
        }

        function getAdById(adsId) {
            return resource.get({url: '/ads', adsId:adsId})
        }

        function getAllTowns(){
            return resource.query({url: '/towns'})
        }

        function getAllCategories(){
            return resource.query({url: '/categories'})
        }

        return {
            getAllAds: getAllAds,
            getAdById: getAdById,
            getAllTowns: getAllTowns ,
            getAllCategories: getAllCategories
        }
    });
