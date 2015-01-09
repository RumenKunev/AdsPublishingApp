'use strict';

angular.module("AdsPublisher")
    .factory('adsData', function($resource, baseUrl){
        var resource = $resource(baseUrl + ':url/:adsId', {url: '@url', adsId: '@adsId' }, {
            update: { method: 'PUT'}
        });

        function getAllAds(){
            return resource.get({url: '/ads'})
        }

        function getUserAds(){
            return resource.get({url: 'user/ads'})
        }

        function getUserAdById(adsId) {
            return resource.get({url: 'user/ads', adsId:adsId})
        }

        function createNewAd(ad){
            return resource.save({url: '/user/ads'})
        }

        function editAd(adsId, ad){
            return resource.update({url: 'user/ads', adsId:adsId}, ad)
        }

        function deleteAdById(adsId){
            return resource.delete({url: 'user/ads', adsId:adsId})
        }

        function getAllTowns(){
            return resource.query({url: '/towns'})
        }

        function getAllCategories(){
            return resource.query({url: '/categories'})
        }

        return {
            getAllAds: getAllAds,
            getUserAds: getUserAds,
            getUserAdById: getUserAdById,
            createNewAd:createNewAd,
            editAd: editAd,
            deleteAdById: deleteAdById,
            getAllTowns: getAllTowns ,
            getAllCategories: getAllCategories
        }
    });
