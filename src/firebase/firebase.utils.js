import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBuHzMAWdABR7VggXgpooufGmGt3XN4NVE",
    authDomain: "crwn-db-f351a.firebaseapp.com",
    databaseURL: "https://crwn-db-f351a.firebaseio.com",
    projectId: "crwn-db-f351a",
    storageBucket: "crwn-db-f351a.appspot.com",
    messagingSenderId: "632552354479",
    appId: "1:632552354479:web:735d22570a231e0d6b1a5a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;