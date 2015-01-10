'use strict';

angular.module("AdsPublisher")
    .controller("UserAdsListController", ['$scope', '$location', 'authenticationData', 'adsData', 'userAdsData' , 'notifyService',
        function UserAdsListController ($scope, $location, authenticationData, adsData, userAdsData, notifyService){

            $scope.isLogged = authenticationData.isLogged();

            $scope.displayUsername = function displayUsername(){
                var username = {};
                if($scope.isLogged){
                    username = authenticationData.getAuthenticationToken().username;
                }
                return username;
            };

            $scope.allUserAds = userAdsData.getUserAds();

    }]);
