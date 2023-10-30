import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrUoVXMhrtAwbq5AjktVmcm68TJhds6pA",
  authDomain: "rnincomeexpensegit.firebaseapp.com",
  projectId: "rnincomeexpensegit",
  storageBucket: "rnincomeexpensegit.appspot.com",
  messagingSenderId: "748212473429",
  appId: "1:748212473429:web:3288ca2619e5cc25210edc"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_DB_NAME = "/testdb/";