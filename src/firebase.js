import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAdvVFVZtNM0ZlpLI0LBlcS0Q-a_jEhzWM",
    authDomain: "react-hello-e262b.firebaseapp.com",
    databaseURL: "https://react-hello-e262b.firebaseio.com",
    projectId: "react-hello-e262b",
    storageBucket: "react-hello-e262b.appspot.com",
    messagingSenderId: "912383364915",
    appId: "1:912383364915:web:49ec217602226a345cf846",
    measurementId: "G-SLBKG84CFL"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore()
// const settings = { timestampsInSnapshots: true};
// firestore.settings(settings);

