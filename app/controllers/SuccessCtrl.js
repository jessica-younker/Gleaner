"use strict";

app.controller("SuccessCtrl", function($scope, CardFactory, AuthFactory, $location, $routeParams){
	//control for viewing specific farmer's cards for editing
	let user = AuthFactory.getUser();

	$scope.reservedItem = "Produce Box";
});