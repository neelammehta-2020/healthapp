import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyASzPwm3z0WuHGafJ9jbwJboMYGOfFM2Ck",
    authDomain: "healthapp-c91f1.firebaseapp.com",
    projectId: "healthapp-c91f1",
    storageBucket: "healthapp-c91f1.appspot.com",
    messagingSenderId: "754729075471",
    appId: "1:754729075471:web:5e4838f29bf6952ef3b47a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();