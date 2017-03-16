"use strict";

app.controller("FarmerCardsCtrl", function($scope, CardFactory, AuthFactory, $location){
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
        .then(function(response){
            CardFactory.getCards(user).then(function(cardCollection){
            	console.log("$scope.cards", $scope.cards);
                $scope.cards = cardCollection;
                $location.url("#!/farmerscards");
            });
        });
	    
	};

	$scope.editCard = function(cardId){
		if (card is a box)
		$location.url("/cards/new/box");
		else 
		$location.url("/cards/new/harvest");
	};


	// CardFactory.editCard();



});



   