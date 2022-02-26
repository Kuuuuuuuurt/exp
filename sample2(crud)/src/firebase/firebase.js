import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChIroGGaPb0zpu6EaWyiPXSYXu3T-2MLw",
  authDomain: "auth-sample-cfc0d.firebaseapp.com",
  projectId: "auth-sample-cfc0d",
  storageBucket: "auth-sample-cfc0d.appspot.com",
  messagingSenderId: "511936210316",
  appId: "1:511936210316:web:20824c7e634d7c4d6522a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, 'cities');
const countryColRef = collection(db, 'country')
export {citiesColRef, countryColRef,app};