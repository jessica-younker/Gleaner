"use strict";

app.controller("BoxCardsCtrl", function($scope, $routeParams, CardFactory, $location, AuthFactory, FilterFactory){

	let user = AuthFactory.getUser();
    
    //passing user to ensure authentication?
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });

    $scope.cardDetails = function(cardId){
    	$routeParams.cardId = cardId;
    	console.log("RP in boxcarctrl", $routeParams.cardId);
		$location.url(`/cards/all/box/${cardId}`);
		
	};
	
});
