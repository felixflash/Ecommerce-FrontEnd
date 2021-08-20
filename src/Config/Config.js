import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDqG9yhFG_BjdSBjefRdGTxhIY6HUzGYao",
    authDomain: "frontend-4cf5c.firebaseapp.com",
    databaseURL: "https://frontend-4cf5c-default-rtdb.firebaseio.com",
    projectId: "frontend-4cf5c",
    storageBucket: "frontend-4cf5c.appspot.com",
    messagingSenderId: "516365055492",
    appId: "1:516365055492:web:8fc0d73b3faa19cff76751",
    measurementId: "G-5YC31Y9BDM"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }