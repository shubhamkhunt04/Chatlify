import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtZbxslqbzegPtf-bPqQXV17BbOOh1j5Q",
  authDomain: "react-chat-app-62eb9.firebaseapp.com",
  projectId: "react-chat-app-62eb9",
  storageBucket: "react-chat-app-62eb9.appspot.com",
  messagingSenderId: "113153584217",
  appId: "1:113153584217:web:68a5a6cbb336a5a1fd9548",
  measurementId: "G-PLHZSL4FPG"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;
