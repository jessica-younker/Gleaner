"use strict";


app.controller("BoxCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, $routeParams){

	let user = AuthFactory.getUser();
    
    $scope.title = "Box Details";
	$scope.card = {};

	let cardId = $routeParams.cardId;
	 	
	CardFactory.getSingleCard($routeParams.cardId)
		.then(function successCallback(response){
			console.log("getSingleItemresponse", response);
			$scope.card = response;
	});

	$scope.reserveBox = function(){
		console.log("you clicked reserve");
		CardFactory.getSingleCard($routeParams.cardId)
		.then(function successCallback(response){
			$scope.newCard = response;
			let amount = response.numberAvailable;
			$scope.newCard.numberAvailable = amount - 1;
			console.log ("updatedAmount", $scope.newCard.numberAvailable);
			console.log("$scope.newCard", $scope.newCard);
			
			CardFactory.updateCard($routeParams.cardId, $scope.newCard)
			.then(function successCallback(response) {
			console.log("now look here", response);
			$location.url(`/success/${cardId}`);
			});
		});

	
	};		
    
    
	
});

//add ability to edit and delete if user from this view