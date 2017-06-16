"use strict";

app.controller("BoxSuccessCtrl", function($scope, AuthFactory, $location){

	let user = AuthFactory.getUser();

	$scope.reservedItemTitle = "Thank you! You have successfully reserved a Produce Box. Your grower has been notified and will be in touch with you.";
	$scope.reservedItemMessage = "Please remember to arrive during the scheduled pick-up time.";

	$scope.cardDetails = function(){
   		$location.url("/cards/all/box/");	
	};   	
});