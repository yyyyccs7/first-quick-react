import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDZYzgHjcbC5iZyCXGeopK6tuR2kKVW1Fs",
    authDomain: "first-quick-react.firebaseapp.com",
    databaseURL: "https://first-quick-react.firebaseio.com",
    projectId: "first-quick-react",
    storageBucket: "first-quick-react.appspot.com",
    messagingSenderId: "451507045047",
    appId: "1:451507045047:web:fc1311e5d080d2c3af4332",
    measurementId: "G-F4H6JTV8S3"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;