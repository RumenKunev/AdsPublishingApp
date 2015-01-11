'use strict';

angular.module("AdsPublisher")
    .controller("PublishAdController", ['$scope', '$location', 'authenticationData', 'adsData', 'userAdsData' , 'notifyService',
        function PublishAdController ($scope, $location, authenticationData, adsData, userAdsData, notifyService){

        $scope.isLogged = authenticationData.isLogged();

        $scope.displayUsername = function displayUsername(){
            var username = '';
            if($scope.isLogged){
                username = authenticationData.getAuthenticationToken().username;
            }
            return username;
        };

        $scope.allTowns = adsData.getAllTowns();
        $scope.allCategories = adsData.getAllCategories();

        $scope.publishAd = function publishAd(publishForm, publishAdForm){
            if (publishAdForm.$valid) {
                userAdsData.publishUserAd(publishForm)
                    .$promise
                    .then(function (result) {
                        notifyService.showInfo('Your ad will be published, once it is approved by an administrator');
                        $location.path("/user/ads");
                    });
            } else {
                notifyService.showError("Publishing ad failed!", serverError);
            }
        };
    }]
);
