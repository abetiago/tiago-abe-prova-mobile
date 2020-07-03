import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "EOcbRuM3TGH8kjWq7gnQjZ2poETid-6as54s65d,
    authDomain: "mobile-b48ea.firebaseapp.com",
    databaseURL: "https://mobile-c36da.firebaseio.com",
    projectId: "mobile-c36da",
    storageBucket: "mobile-c36da.appspot.com",
    messagingSenderId: "1095774557497",
    appId: "1:1523648963125:web:c74872198d2957330e04e8",
    measurementId: "H-KIJNGT7CP9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
