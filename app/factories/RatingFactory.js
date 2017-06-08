"use strict";

app.factory("RatingFactory", ($q, $http, FBCreds) => {
 
	let getAllRatings = (user) => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/ratings.json`)
			.then((ratingObject) => {
				let ratings = [];
				let ratingCollection = ratingObject.data;
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

	return {getAllRatings, postRating};

});
