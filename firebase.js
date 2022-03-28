// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4u15uLsoVqYWGmtVxs0SDMqKeUN4aRFY",
    authDomain: "insta-m-murmu.firebaseapp.com",
    projectId: "insta-m-murmu",
    storageBucket: "insta-m-murmu.appspot.com",
    messagingSenderId: "771526014613",
    appId: "1:771526014613:web:5a26b5d12e06f33135cd9c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };