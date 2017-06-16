"use strict";

app.controller("EditBoxCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();

	$scope.title = "Edit Box Listing";
	$scope.btnText = "Update";
	$scope.newCard = {};

	CardFactory.getSingleCard($routeParams.cardId)
		.then(function successCallback(response){
			$scope.newCard = response;
	});

	$scope.addNewCard = function(){
		CardFactory.updateCard($routeParams.cardId, $scope.newCard)
		.then(function successCallback(response) {
		$location.url("/farmerscards");
		});
	};

});





 