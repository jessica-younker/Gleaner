"use strict";

app.factory("TwilioFactory", function(TwilioCreds, $http, $base64, $httpParamSerializer){
	
	let auth = $base64.encode(`${TwilioCreds.SID}:${TwilioCreds.authToken}`);
	let headers = {
		"Authorization": `Basic ${auth}`,
		'Content-Type': `application/x-www-form-urlencoded`
	};

	let baseURL = `https://${TwilioCreds.SID}:${TwilioCreds.authToken}@api.twilio.com/2010-04-01/Accounts`;

	let sendSMS = (number, message) => {
		let data = {
			To: `+1${number}`,
			MessagingServiceSid: TwilioCreds.MessagingServiceSid,
			Body: message,
		};

		let URL = `${baseURL}/${TwilioCreds.SID}/Messages`;

		return $http.post(URL, $httpParamSerializer(data), {headers: headers});
	};

	return {sendSMS};	
});

