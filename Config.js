import firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrOAdFcLW-3M3OgmPIb23mVGRNkZSP8LA",
  authDomain: "bedtime-stories-e1171.firebaseapp.com",
  databaseURL: "https://bedtime-stories-e1171-default-rtdb.firebaseio.com",
  projectId: "bedtime-stories-e1171",
  storageBucket: "bedtime-stories-e1171.appspot.com",
  messagingSenderId: "23739258996",
  appId: "1:23739258996:web:25c1ba08dbb7dbf2b85921",
  measurementId: "G-LM2377QYVZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();