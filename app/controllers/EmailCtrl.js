"use strict";

app.controller("EmailCtrl", function($scope, AuthFactory){

	let user = AuthFactory.getUser();

	$scope.action = "emailed a question to the grower responsible for this harvest.";

});