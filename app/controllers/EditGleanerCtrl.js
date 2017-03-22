"use strict";
app.controller("EditGleanerCtrl", function($scope, $window, AuthFactory, $location, CardFactory, $routeParams){

//sign up button clicks to form
//click on gleaner card gets detailed view w/ ability to add "voucher" and comment if you are a farmer
let user = AuthFactory.getUser();
     
    $scope.title = "Edit Gleaner";
    $scope.btnTxt = "Update";
    $scope.newCard = {};

    
    CardFactory.getCards()
        .then(function(cardCollection) {
            $scope.cards = cardCollection;
            console.log("$scope.cards", $scope.cards);
            $scope.newCard = $scope.cards.find(function(card) {
                return card.uid === user && "skill" in card;  
            }); 
            console.log("$scope.gleanerCard", $scope.newCard);
        });
    
	$scope.addNewCard = function(){
        CardFactory.updateCard($scope.newCard.id, $scope.newCard)
        .then(function successCallback(response) {
        	$location.url("/gleanerguild");
        });
    };
    
    $scope.deleteCard = function(){
        CardFactory.deleteCard($scope.newCard.id)
        .then(function(response){
            CardFactory.getCards(user).then(function(cardCollection){
                console.log("$scope.cards", $scope.cards);
                $scope.cards = cardCollection;
                $location.url("#!/gleanerguild");
            });
        });

    };


});
