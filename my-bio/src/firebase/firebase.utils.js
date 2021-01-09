import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFcvfE7PrRgj_wOtbGv-0Ek3trvka-lCM",
    authDomain: "mybio-c2abf.firebaseapp.com",
    databaseURL: "https://mybio-c2abf-default-rtdb.firebaseio.com",
    projectId: "mybio-c2abf",
    storageBucket: "mybio-c2abf.appspot.com",
    messagingSenderId: "343885683068",
    appId: "1:343885683068:web:a66b549e31faeac9caecf9",
    measurementId: "G-SKJC5X1FPB"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;