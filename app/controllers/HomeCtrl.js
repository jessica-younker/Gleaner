"use strict";

app.controller("HomeCtrl", function($scope, $window, AuthFactory, $location, CardFactory){
	
	$scope.findBox = function(){
		$location.url("/cards/all/box");
	};

	$scope.findHarvest = function(){
		$location.url("/cards/all/harvest");
	};

	$scope.shareProduce = function(){
		$location.url("/chooseyouradventure");
	};

	$scope.joinGuild = function(){
		$location.url("/gleanerguild");
	};


});