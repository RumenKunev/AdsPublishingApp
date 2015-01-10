'use strict';

angular.module("AdsPublisher")
    .factory('userAdsData', function($resource, authenticationData, baseUrl){

        var headers = authenticationData.getHeaders();

        var resource = $resource(baseUrl + ':url/:adsId', {url: '@url', adsId: '@adsId' }, {
            update: { method: 'PUT'}
        });

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

        return {
            getUserAds: getUserAds,
            getUserAdById: getUserAdById,
            createNewAd:createNewAd,
            editAd: editAd,
            deleteAdById: deleteAdById
        }
    });
