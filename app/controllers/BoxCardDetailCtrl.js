"use strict";


app.controller("BoxCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, $routeParams){

	let user = AuthFactory.getUser();
    
    $scope.title = "Box Details";
	$scope.card = {};

	let cardId = $routeParams.cardId;
	 	console.log("cardId", cardId);
		console.log("routeParams?", $routeParams.cardId);

	$scope.reserveBox = function(){
		console.log("you clicked reserve");
		$location.url("/success");
		// CardFactory.getSingleCard($routeParams.cardId)
		// .then(function successCallback(response){
		// 	console.log("getSingleItemresponse", response);
		// 	$scope.card = response;

			
		// });
		
	};
    
    
	
});

//add ability to edit and delete if user from this view