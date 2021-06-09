import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFzgQrE4J_5u4mkp9bg5HQ0nwLipXcTTA",
    authDomain: "shopreact-3bb13.firebaseapp.com",
    projectId: "shopreact-3bb13",
    storageBucket: "shopreact-3bb13.appspot.com",
    messagingSenderId: "880135134188",
    appId: "1:880135134188:web:b9a48513e507941e3ffec9",
    measurementId: "G-E3RDV4F1VN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;