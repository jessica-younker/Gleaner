"use strict";

app.controller("EditHarvestCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();

	$scope.title = "Edit Harvest Listing";
	$scope.btnText = "Update";
	$scope.newCard = {};
  $scope.btnText2 = "Update & Notify";

  
	CardFactory.getSingleCard($routeParams.cardId)
  	.then(function successCallback(response){
        
    	$scope.newCard = response;
        console.log("$scope.card", $scope.newCard);
  	});
    
  	$scope.addNewCard = function(){
    	CardFactory.updateCard($routeParams.cardId, $scope.newCard)
    	.then(function successCallback(response) {
      	$location.url("/farmerscards");
    	});
  	};
}); 

