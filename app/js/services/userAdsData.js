'use strict';

angular.module("AdsPublisher")
    .factory('userAdsData', function($resource, authenticationData, baseUrl){

        var headers = authenticationData.getHeaders();

        var userAdsData = $resource(baseUrl + '/user/ads' + ':activate/:adsId', {activate: '@activate', adsId: '@adsId' }, {
            'getUserAds': {method: 'GET', isArray: false, headers: headers},
            'publishUserAd': {method: 'POST', isArray: false, headers: headers},
            'deactivateUserAd': {
                method: 'PUT', params: {activate: '/deactivate/', adsId: '@id'},
                isArray: false, headers: headers
            },
            'publishAgainUserAd': {
                method: 'PUT', params: {activate: '/publishagain/', adsId: '@id'},
                isArray: false, headers: headers
            },
            'getUserAd': {
                method: 'GET', params: {adsId: '@id'}, isArray: false, headers: headers
            },
            'editUserAd': {
                method: 'PUT', params: {adsId: '@id'}, isArray: false, headers: headers
            },
            'deleteUserAd': {
                method: 'DELETE', params: {adsId: '@id'}, isArray: false, headers: headers
            }
    });

        return {
            getUserAds: function (request) {
                return userAdsData.getUserAds(request);
            },
            publishUserAd: function (publishForm) {
                return userAdsData.publishUserAd(publishForm);
            },
            deactivateUserAd: function (id) {
                return userAdsData.deactivateUserAd({id: id});
            },
            publishAgainUserAd: function (id) {
                return userAdsData.publishAgainUserAd({id: id});
            },
            getUserAd: function (id) {
                return userAdsData.getUserAd({id: id});
            },
            editUserAd: function (adData, selectedId) {
                return userAdsData.editUserAd(adData);
            },
            deleteUserAd: function (id) {
                return userAdsData.deleteUserAd({id: id});
            }
        }

    });