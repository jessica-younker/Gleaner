"use strict";

app.controller("CommentCtrl", function($scope, CardFactory, AuthFactory, $routeParams){

let user = AuthFactory.getUser();
	
	console.log($routeParams.cardId);
    CardFactory.getSingleCard($routeParams.cardId)
        .then(function successCallback(response){
        	let commentArray = [];
        	commentArray.push(response.comment);
            let joined = commentArray.join();
            $scope.commentList = joined;
        });
 
});