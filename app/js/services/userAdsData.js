'use strict';

angular.module("AdsPublisher")
    .factory('userAdsData', function($resource, authenticationData, baseUrl){

        var headers = authenticationData.getHeaders();

        var userAdsData = $resource(baseUrl + '/user/ads' + ':activate/:adsId', {activate: '@activate', adsId: '@adsId' }, {
            'getUserAds': {method: 'GET', isArray: false, headers: headers},
            'publishUserAd': {method: 'POST', isArray: false, headers: headers},
            'deactivateUserAd': {
                method: 'PUT', params: {activate: '/deactivate/', adsId: '@adsId'},
                isArray: false, headers: headers
            },
            'publishAgainUserAd': {
                method: 'PUT', params: {activate: '/publishagain/', adsId: '@adsId'},
                isArray: false, headers: headers
            },
            'getUserAd': {
                method: 'GET', params: {adsId: '@adsId'}, isArray: false, headers: headers
            },
            'editUserAd': {
                method: 'PUT', params: {adsId: '@adsId'}, isArray: false, headers: headers
            },
            'deleteUserAd': {
                method: 'DELETE', params: {adsId: '@adsId'}, isArray: false, headers: headers
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
                return userAdsData.deactivateUserAd({adsId: id});
            },
            publishAgainUserAd: function (id) {
                return userAdsData.publishAgainUserAd({adsId: id});
            },
            getUserAd: function (id) {
                return userAdsData.getUserAd({adsId: id});
            },
            editUserAd: function (publishForm, selectedId) {
                return userAdsData.editUserAd(publishForm);
            },
            deleteUserAd: function (id) {
                return userAdsData.deleteUserAd({adsId: id});
            }
        }

    });