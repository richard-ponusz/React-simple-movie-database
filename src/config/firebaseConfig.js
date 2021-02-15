import * as firebase from 'firebase';
import {PROJECT_ID, FIREBASE_API_KEY} from 'src/local.env';

const firebaseConfig = {
  apiKey: `${FIREBASE_API_KEY}`,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: `${PROJECT_ID}`,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  messagingSenderId: "86837837745",
  appId: "1:86837837745:web:3a4c084ca0188598a28790",
  measurementId: "G-09B8MMZMPX"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
