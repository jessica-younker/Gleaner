"use strict";

app.controller("TextSuccessCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();

	$scope.reservedItemTitle = "Congratulations! You have successfully texted the Gleaner Guild about your harvest opportunity.";
	$scope.reservedItemMessage = "May this elite cadre of gleaners bring you great joy.";
	console.log("$scope.reservedItem");

	$scope.cardDetails = function(){
   		$location.url("/cards/all/box/");	
	};   	
});