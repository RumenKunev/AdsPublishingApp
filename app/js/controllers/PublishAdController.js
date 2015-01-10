'use strict';

angular.module("AdsPublisher")
    .controller("PublishAdController", ['$scope', 'authenticationData', 'adsData', 'userAdsData' , 'notifyService',
        function PublishAdController ($scope, authenticationData, adsData, userAdsData, notifyService){

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
                        notifyService.showInfo('Advertisement submitted for approval. Once approved, it will be published.');
                        $location.path("/user/ads");
                    });
            } else {
                notifyService.showError("Publish ad failed advertisement title and text are required!", serverError);
            }
        };
    }]
);
