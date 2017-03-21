"use strict";
console.log("hello from RATINGfactory");

app.factory("RatingFactory", ($q, $http, FBCreds) => {

	let getAllRatings = (user) => {
		console.log("hello from IN getRating");
	
		return $q((resolve, reject) => {
			console.log("rating url", `${FBCreds.databaseURL}/ratings.json`);
			$http.get(`${FBCreds.databaseURL}/ratings.json`)
			.then((ratingObject) => {
				let ratings = [];
				let ratingCollection = ratingObject.data;
				console.log("ratingCollection", ratingCollection);
				Object.keys(ratingCollection).forEach((key) => {
					ratingCollection[key].id = key;
					ratings.push(ratingCollection[key]);
				});
				resolve(ratings);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let postRating = (newRating) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/ratings.json`, JSON.stringify(newRating))
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	// let getGleanersRatings = (cardId) => {
	// 	return $q(function(resolve, reject){
	// 		$http.get(`${FBCreds.databaseURL}/cards/${cardId}.json`)
	// 		.then(function(cardObject){
	// 			resolve(cardObject.data);
	// 		})
	// 		.catch(function(error){
	// 			reject(error);
	// 		});
	// 	});
	// };



	// let updateCard = (cardId, editedCard) => {
	// 	//Properties with leading $$ characters will be stripped since AngularJS uses this notation internally.
 //  	console.log("angularJSON", angular.toJson(editedCard));
 //  	console.log("JSON.stringify", JSON.stringify(editedCard));
  	
	// 	return $q(function(resolve, reject){
	// 		$http.patch(`${FBCreds.databaseURL}/cards/${cardId}.json`,
	// 			angular.toJson(editedCard))
	// 		.then(function(ObjectFromFirebase){
	// 			resolve(ObjectFromFirebase);
	// 		})
	// 		.catch(function(error){
	// 			reject(error);
	// 		});
	// 	});
	// };

	return {getAllRatings, postRating};

});
