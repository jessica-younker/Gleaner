"use strict";
console.log("hello from authfactory");

app.factory("AuthFactory", function($location){

	let currentUser = null;
	console.log("currentUser defined at start of page", currentUser);

	let createUser = function(userObj){
		

		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch( function(error){
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error:", errorCode, errorMessage);
		});
	};

	let loginUser = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( function(error){
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error:", errorCode, errorMessage);
		});
	};

	let logoutUser = function(){
		console.log("logoutUser");
		return firebase.auth().signOut();
	};

	let isAuthenticated = function (){
		console.log("in AuthFactory.isAuthenticated");

		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				if (user){
					currentUser = user.uid;
					console.log("user.uid=", currentUser);
					resolve(true);
				}else {
            		// $location.url("/loginplz");
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		console.log("currentUser in auth", currentUser);
		return currentUser;

	};


	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithProvider= function(){
    	return firebase.auth().signInWithPopup(provider);
  	};

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};
});