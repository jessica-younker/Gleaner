"use strict";

app.controller("CommentCtrl", function($scope, $window, CardFactory, AuthFactory, $location, $routeParams){

console.log("hi from comments");
let user = AuthFactory.getUser();
	
	console.log($routeParams.cardId);
    CardFactory.getSingleCard($routeParams.cardId)
        .then(function successCallback(response){
        	let commentArray = [];
        	commentArray.push(response.comment);
            console.log("commentArray", commentArray);
            let joined = commentArray.join();
            console.log("joined", joined);
            $scope.commentList = joined;
        });
 
});