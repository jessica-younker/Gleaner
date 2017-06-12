## Synopsis

The Green Gleaner was created over a 2-week period for my front-end capstone project at the Nashville Software School. It is a web application that allows growers to post listings notifying the public of cosmetically-inferior produce available for sale or harvesting. The app allows farmers to post Produce Boxes or Harvest Opportunities. Listings describe the content, quality, pick-up location, etc. of the boxed produce and harvests. 

The Gleaner Guild allows lay people to sign up to receive notifications via SMS of hot new harvest opportunities and to reserve their spots for a harvest. Farmers can rate Gleaner Guild participants, affecting the gleaner's rating, as a measure to limit the number of yahoos trying to come to their farms. 

As of 4/5/17 there is no payment processing integrated in the application, but farmers have access to a rudimentary inventory tracking system under `My Account`.

## Motivation

So much food is wasted in agricultural operations of all scales because farms' regular markets often won't purchase cosmetically-inferior produce. This webapp  provides a marketplace and a financial incentive for farmers to sell their ugly produce to the people.

## Technologies
* [AngularJs](https://angularjs.org/) - Web framework
* [npm](https://www.npmjs.com/) - Dependency management
* [Grunt](https://gruntjs.com/) - Task manager
* [Firebase](https://firebase.google.com/) - Data persistance 
* [Twilio](https://twilio.com/) - SMS API 

## Prerequisites
You'll need Node Package Manger to run this application:
[npm](https://www.npmjs.com/)

## Installation
Clone the repository from GitHub, install its dependencies, run Grunt, and then serve it up. 

Commands to run:

```
git clone https://github.com/jessica-younker/Green_Gleaner
cd lib
npm install
grunt
```

In another terminal window:

```
hs
```

Then navigate to http://localhost:8080/#!/ using your preferred browser.
You should see some errors regarding missing files in your console. If you want to properly run this application, you'll need to add the following files (remember to un-comment out their script tags in index.html:

```
cd app/
mkdir app/values && cd app/values
touch fb-creds.js twilio-creds.js
cd ../../
```

This project uses Twilio's SMS API so that farmers can easily commuicate with Gleaners about hot new gleaning opportunities and so that Gleaners can sign-up to harvest opportunities in a way that is convenient for farmers. To fully utilize this application, you'll want to get your Twilio credentials in order at [Twilio](https://twilio.com/sms/api).

Once you've got your creds, navigate to the twilio-creds.js file you created and set it up like this:

```
"use strict";

app.constant("TwilioCreds", {
    SID: "",
    authToken: "",
    MessagingServiceSid: "",
    
});
```

In order to set up a data base for this application, you'll need to get some cred with Firebase, too. At [Firebase](https://firebase.google.com/), create an account. Then click `GO TO CONSOLE` at the top right of the screen to add the Green Gleaner to your projects.
From the Overview page, click the round red `</>` icon to retrieve your apiKey, authDomain, and databaseURL. Copy that info to the FBConfig.js you created according to this pattern:

```
"use strict";

app.constant("FBCreds", {
    apiKey: "",
    authDomain: "",
    databaseURL: ""    
});
```

Return to the project Overview on Firebase and click the `Database` tab on the left sidebar. Select the `RULES` tab from the top menu. Add the following rules to the JSON script:

```
{
  "rules": {
    ".read": true,
    ".write": true,
      "cards": {
        ".indexOn": ["uid"]
      }
  }
}
```

Now select `Authentication` from the left sidebar. Choose `SIGN-IN METHOD` from the top menu and enable the Email/Password provider and Google. Now you're good to go!

## Acknowledgements

Support your local farmer! 