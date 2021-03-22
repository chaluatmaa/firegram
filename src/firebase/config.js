import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyBWdAot2N0wHjcFZleWI2_Ce6K8neFf7tA",
	authDomain: "firegram-f3248.firebaseapp.com",
	projectId: "firegram-f3248",
	storageBucket: "firegram-f3248.appspot.com",
	messagingSenderId: "380585291323",
	appId: "1:380585291323:web:1aead8c9f303a1de94361e",
	measurementId: "G-MCL3K7L0B9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
