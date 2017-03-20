"use strict";


app.controller("BoxCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, $routeParams){

	let user = AuthFactory.getUser();
    
    $scope.title = "Box Details";
	$scope.card = {};

	let cardId = $routeParams.cardId;
	 	console.log("cardId", cardId);
		console.log("routeParams?", $routeParams.cardId);
	
	CardFactory.getSingleCard($routeParams.cardId)
	.then(function successCallback(response){
		$scope.card = response;
		return $scope.card.id ===$routeParams.cardId;
	});

	$scope.reserveBox = function(){
		CardFactory.getSingleCard($routeParams.cardId)
		.then(function successCallback(response){
			console.log("getSingleItemresponse", response);
			$scope.card = response;
			// $scope.card.reserved + 1; 
	});

		console.log("Youve Reserved thisbox");
		console.log("$scope.card.reserved", $scope.card.reserved);
	}
	//these buttons visible only if user's
    $scope.editBox = function(cardId){
		$location.url("/cards/:cardId/edit/box");
	};

	$scope.deleteBox = function(cardId){
	    console.log("delete this card", cardId);
	    CardFactory.deleteCard(cardId)
        .then(function(response){
            CardFactory.getCards(user).then(function(cardCollection){
            	console.log("$scope.cards", $scope.cards);
                $scope.cards = cardCollection;
                $location.url("#!/cards/all/box");
            });
        });
	    
	};
	
});