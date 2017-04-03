"use strict";

app.controller("FarmerCardsCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){
	//control for viewing specific farmer's cards for editing
	let user = AuthFactory.getUser();
	$scope.farmer = user;

	CardFactory.getCards()
	.then(function(cardCollection) {
		$scope.cards = cardCollection;

		$scope.farmersCards = $scope.cards.filter(function(card) {
			return card.uid === $scope.farmer;	
		});	
	});

	$scope.deleteListing = function(cardId){
	    console.log("delete this card", cardId);
	    CardFactory.deleteCard(cardId)
        .then(function(){
        	$location.url("#!/farmerscards");
        });
	    
	};

	$scope.editCard = function(cardId){
		$routeParams.cardId = cardId;
		
		CardFactory.getSingleCard($routeParams.cardId)
		.then(function successCallback(response){
			$scope.newCard = response;
			console.log("$scope.newCard", $scope.newCard);
			if ("cost" in $scope.newCard) {
				$location.url(`/cards/${cardId}/edit/box`);
			} else {
				$location.url(`/cards/${cardId}/edit/harvest`);
			}
		});
	};



});

 
   