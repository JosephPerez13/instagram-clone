import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


//We will need to connect our seed data here
const config = {
    apiKey: "AIzaSyCmGcjye5JJEeM8uSTquAQ-CItzBG80lxk",
    authDomain: "jp-instagram.firebaseapp.com",
    projectId: "jp-instagram",
    storageBucket: "jp-instagram.appspot.com",
    messagingSenderId: "292385561424",
    appId: "1:292385561424:web:4c0acac6aff14700b7ea55",
    measurementId: "G-XQ71RQ67ZB"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Will run the seedData function here when ready
//DON'T UNCOMMENT THE LINE UNDERNEATHE
// seedDatabase(firebase);
export {firebase, FieldValue};