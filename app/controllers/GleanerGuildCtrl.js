"use strict";
app.controller("GleanerGuildCtrl", function($scope, $window, CardFactory, AuthFactory, $location){

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

	$scope.rateGleaner = function(cardId){
		$location.url(`/rategleaner/${cardId}`);
	};

	$scope.moreComments = function(cardId){
		$location.url(`/morecomments/${cardId}`);
	};

	// console.log($scope.)

	//gleaner cannot rate herself

		
});
