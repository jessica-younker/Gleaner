"use strict";

app.controller("FarmerTextSuccessCtrl", function($scope, AuthFactory, $location){

	let user = AuthFactory.getUser();

	$scope.reservedItemTitle = "Congratulations! You have successfully texted this farmer about their harvest opportunity.";
	$scope.reservedItemMessage = "They will be in touch with you about the details shortly.";

	$scope.cardDetails = function(){
   		$location.url("/cards/all/box/");	
	};   	
});