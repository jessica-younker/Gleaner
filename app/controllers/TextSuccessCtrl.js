"use strict";

app.controller("TextSuccessCtrl", function($scope, AuthFactory, $location){
	let user = AuthFactory.getUser();

	$scope.reservedItemTitle = "Congratulations! You have successfully texted the Gleaner Guild about your harvest opportunity.";
	$scope.reservedItemMessage = "May this elite cadre of gleaners bring you great joy.";
	
	$scope.cardDetails = function(){
   		$location.url("/cards/all/harvest/");	
	};   	
});