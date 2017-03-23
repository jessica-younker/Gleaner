"use strict";

app.controller("BoxSuccessCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){
	//control for viewing specific farmer's cards for editing
	let user = AuthFactory.getUser();

	$scope.reservedItemTitle = "Thank you! You have successfully reserved a Produce Box. Your grower has been notified and will be in touch with you.";
	$scope.reservedItemMessage = "Please remember to arrive during the scheduled pick-up time.";
	console.log("$scope.reservedItem");

	$scope.cardDetails = function(){
   		$location.url("/cards/all/box/");	
	};   	
});