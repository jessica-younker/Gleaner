"use strict";
console.log("hello from cardfactory");

app.factory("CardFactory", ($q, $http, FBCreds) => {

	let getCards = (user) => {
		console.log("hello from IN getCards");
	
		return $q((resolve, reject) => {
			console.log("cards url", `${FBCreds.databaseURL}/cards.json`);
			$http.get(`${FBCreds.databaseURL}/cards.json`)
			.then((cardObject) => {
				let cards = [];
				let cardCollection = cardObject.data;
				console.log("cardCollection", cardCollection);
				Object.keys(cardCollection).forEach((key) => {
					cardCollection[key].id = key;
					cards.push(cardCollection[key]);
				});
				resolve(cards);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let postCard = (newCard) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/cards.json`,
				JSON.stringify(newCard))
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let deleteCard = (cardId) => {
		console.log("delete in factory", cardId);
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/cards/${cardId}.json`)
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			});
		});
	};

	let getSingleCard = (cardId) => {
		return $q(function(resolve, reject){
			$http.get(`${FBCreds.databaseURL}/cards/${cardId}.json`)
			.then(function(cardObject){
				resolve(cardObject.data);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

	let updateCard = (cardId, editedCard) => {
		//Properties with leading $$ characters will be stripped since AngularJS uses this notation internally.
  	console.log("angularJSON", angular.toJson(editedCard));
  	console.log("JSON.stringify", JSON.stringify(editedCard));
  	
		return $q(function(resolve, reject){
			$http.patch(`${FBCreds.databaseURL}/cards/${cardId}.json`,
				angular.toJson(editedCard))
			.then(function(ObjectFromFirebase){
				resolve(ObjectFromFirebase);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

	return {getCards, postCard, deleteCard, getSingleCard, updateCard};

});









