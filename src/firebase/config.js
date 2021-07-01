import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKyvKAzfhI6DZKKDoqO8Ljb3irCrNvOsQ",
    authDomain: "chatapp-26efb.firebaseapp.com",
    projectId: "chatapp-26efb",
    storageBucket: "chatapp-26efb.appspot.com",
    messagingSenderId: "405233244947",
    appId: "1:405233244947:web:38c6b5fc5a6002544918e6",
    measurementId: "G-VWBR5Y2Q90"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;