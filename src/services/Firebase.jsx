import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtcE2o2uvyREfZZxLZSflBwgCpeIJuM14",
    authDomain: "final-acg.firebaseapp.com",
    projectId: "final-acg",
    storageBucket: "final-acg.appspot.com",
    messagingSenderId: "866243925723",
    appId: "1:866243925723:web:cba6ff07143537185c5efe"
  }

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)