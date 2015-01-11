'use strict';

angular.module("AdsPublisher")
    .controller("UserAdsListController", ['$scope', '$location', '$route', 'authenticationData', 'adsData', 'userAdsData' , 'notifyService',
        function UserAdsListController ($scope, $location, $route, authenticationData, adsData, userAdsData, notifyService){

            $scope.isLogged = authenticationData.isLogged();

            $scope.displayUsername = function displayUsername(){
                var username = {};
                if($scope.isLogged){
                    username = authenticationData.getAuthenticationToken().username;
                }
                return username;
            };

            $scope.allUserAds = userAdsData.getUserAds();

            $scope.deactivate = function (adsId) {
                userAdsData.deactivateUserAd(adsId)
                    .$promise
                    .then(function (result) {
                        notifyService.showInfo('Ad successfully deactivated.');
                        $route.reload();
                    });
            };

            $scope.publishAgain = function (adsId) {
                userAdsData.publishAgainUserAd(adsId)
                    .$promise
                    .then(function (result) {
                        notifyService.showInfo('Ad submitted. Once approved, it will be published.');
                        $route.reload();
                    });
            };

            $scope.delete = function (selectedId) {
                $location.path("/user/ads/delete/" + selectedId);
            };

            $scope.edit = function (selectedId) {
                $location.path("/user/ads/edit/" + selectedId);
            };

        }]);
