"use strict";

app.controller("HarvestCardsCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, $routeParams){
	
	let user = AuthFactory.getUser();
   
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });

    $scope.cardDetails = function(cardId){
    	$routeParams.cardId = cardId;
    	console.log("RP in boxcarctrl", $routeParams.cardId);
		$location.url(`/cards/all/harvest/${cardId}`);
		
	};




	
});