"use strict";

app.controller("BoxOHarvestCtrl", function($scope, $location){

	$scope.showBoxForm = function(){
			$location.url("/cards/new/box");
	};

	$scope.showHarvestForm = function(){
			$location.url("/cards/new/harvest");
	};

});