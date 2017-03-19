"use strict";

app.controller("HarvestCardsCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory){
	
	let user = AuthFactory.getUser();
    console.log("in HARVEST CARDS");
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
        console.log("$scope.cards in HCCTRL", $scope.cards);
    });




	
});