'use strict';

angular.module("AdsPublisher")
    .controller('DeleteAdController', ['$scope', '$routeParams', '$location', 'authenticationData', 'userAdsData',
    'notifyService', 'userData',
    function DeleteAdController($scope, $routeParams, $location, authenticationData, userAdsData, notifyService, userData) {
        $scope.isLogged = authenticationData.isLogged();

        $scope.displayUsername = function displayUsername(){
            var username = {};
            if($scope.isLogged){
                username = authenticationData.getAuthenticationToken().username;
            }
            return username;
        };

        var selectedId = $routeParams.id;
        $scope.ad = userAdsData.getUserAd(selectedId);

        $scope.deleteAd = function (adsId) {
            userAdsData.deleteUserAd(adsId)
                .$promise
                .then(function (result) {
                    notifyService.showInfo('Ad deleted successfully.');
                    $location.path("/user/ads");
                });
        };
    }
]);
