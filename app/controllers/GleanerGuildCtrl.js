"use strict";
app.controller("GleanerGuildCtrl", function($scope, $window, CardFactory, AuthFactory, $location){

//sign up button clicks to form
// all gleaners displayed
//click on gleaner card gets detailed v
// iew w/ ability to add "voucher" and comment if you are a farmer
let user = AuthFactory.getUser();

	$scope.signUp = function(){
		$location.url("/guildform");
	};

	CardFactory.getCards()
	.then(function(cardCollection) {
		$scope.cards = cardCollection;
		$scope.guildCards = $scope.cards.filter(function(card) {	
			return "skill" in card;
		});

	});	

	$scope.deleteListing = function(cardId){
	    console.log("delete this card", cardId);
	    CardFactory.deleteCard(cardId)
        .then(function(response){
            CardFactory.getCards(user).then(function(cardCollection){
            	console.log("$scope.cards", $scope.cards);
                $scope.cards = cardCollection;
                $location.url("#!/gleanerguild");
            });
        });
	    
	};

	///add editing
	//add rating functionality

		
});
