"use strict";

app.controller("BoxOHarvestCtrl", function($scope, $location){


$scope.showBoxForm = function(){
	console.log("youclickedbox");
		$location.url("/cards/new/box");
};

$scope.showHarvestForm = function(){
		console.log("youclickedharvest");
		$location.url("/cards/new/harvest");
};



});