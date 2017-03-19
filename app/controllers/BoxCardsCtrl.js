"use strict";

app.controller("BoxCardsCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory){

	let user = AuthFactory.getUser();
    
    //passing user to ensure authentication?
    CardFactory.getCards(user)
    .then(function(cardCollection){
        $scope.cards = cardCollection;
    });
	
});


 // $scope.items = [];
 //  console.log($routeParams.itemId);

 //  let user = AuthFactory.getUser();

 //  ItemStorage.getItemList(user)
 //  .then(function(itemCollection) {
 //    $scope.items = itemCollection;
 //    $scope.selectedItem = $scope.items.filter(function(item){
 //      return item.id === $routeParams.itemId;
 //    })[0];
 //  });