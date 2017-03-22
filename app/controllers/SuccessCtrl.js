"use strict";

app.controller("SuccessCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){
	//control for viewing specific farmer's cards for editing
	let user = AuthFactory.getUser();

	$scope.reservedItem = "Produce Box";
	console.log("$scope.reservedItem");
	$routeParams.cardId = "cardId";

	$scope.cardDetails = function(cardId){
    	CardFactory.getSingleCard($routeParams.cardId)
        .then(function successCallback(response){
            $scope.newCard = response;
            console.log("response", response);
            $location.url(`/cards/all/box/${cardId}`);
        });
    	
		
	};
});