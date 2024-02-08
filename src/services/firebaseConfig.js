import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.VITE_APP_APIKEY,
  authDomain:process.env.VITE_APP_AUTHDOMAIN,
  projectId: process.env.VITE_APP_PROJECTID,
  storageBucket: process.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_APP_MESSAGINGSENDERID,
  appId: process.env.VITE_APP_APPID
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)