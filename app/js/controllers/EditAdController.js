'use strict';

angular.module("AdsPublisher")
    .controller("EditAdController", ['$scope', '$location', '$routeParams', 'authenticationData', 'adsData', 'userAdsData' , 'notifyService',
        function EditAdController ($scope, $location, $routeParams, authenticationData, adsData, userAdsData, notifyService){

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

            var selectedId = $routeParams.id;
            $scope.ad = userAdsData.getUserAd(selectedId);

            $scope.editAd = function (publishForm, editAdForm) {
                if (editAdForm.$valid) {
                    userAdsData.editUserAd(publishForm, selectedId)
                        .$promise
                        .then(function () {
                            notifyService.showInfo('Ad edited successfully.');
                            $location.path("/user/ads");
                        });
                } else {
                    notifyService.showError("Advertisement title and text are required!");
                }
            };
        }]
);





