import * as firebase from 'firebase'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDEx0vJTnz8t8M8rvvY2mKqtbGq8r6x5JQ",
    authDomain: "justicecoinofficialwebsite.firebaseapp.com",
    databaseURL: "https://justicecoinofficialwebsite.firebaseio.com",
    projectId: "justicecoinofficialwebsite",
    storageBucket: "justicecoinofficialwebsite.appspot.com",
    messagingSenderId: "217628386627",
    appId: "1:217628386627:web:85e9eb1eecdd4ac2ea7bf6",
    measurementId: "G-BZ0WC1FCRX"
};

// If not initialize firestore instance then do so
// Return firestore instance.
export default !firebase.apps.length
    ? firebase.initializeApp(config).firestore()
    : firebase.app().firestore();