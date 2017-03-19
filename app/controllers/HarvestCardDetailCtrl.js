"use strict";

app.controller("HarvestCardDetailCtrl", function($scope, CardFactory, $location, AuthFactory, FilterFactory, TwilioFactory){

	let user = AuthFactory.getUser();
    

    $scope.textGrower = function(number, message){
    	TwilioFactory.sendSMS();

    };
	

  
});