// Initialize Firebase
var config = {
    apiKey: "AIzaSyDYWDXcc8PYNbbA7a2QOnvpJyqes5oqMu0",
    authDomain: "hours-billed.firebaseapp.com",
    databaseURL: "https://hours-billed.firebaseio.com",
    projectId: "hours-billed",
    storageBucket: "",
    messagingSenderId: "251036207201"
  };

firebase.initializeApp(config);

database = firebase.database();

