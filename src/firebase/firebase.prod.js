import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyA1WqMPvvncqPCGdQlFCgH6tLiRWB3YRsQ",
    authDomain: "react-netflix-clone-app.firebaseapp.com",
    databaseURL: "https://react-netflix-clone-app.firebaseio.com",
    projectId: "react-netflix-clone-app",
    storageBucket: "react-netflix-clone-app.appspot.com",
    messagingSenderId: "1058316180437",
    appId: "1:1058316180437:web:752f1dc1a15a8ddcb5fb5c",
    measurementId: "G-75520XGSZJ"
}

const firebase=Firebase.initializeApp(config);
export default firebase;