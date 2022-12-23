import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: "rasenmovies.firebaseapp.com",
    projectId: "rasenmovies",
    storageBucket: "rasenmovies.appspot.com",
    messagingSenderId: "337981228424",
    appId: "1:337981228424:web:6d62b6a0f8e63ff1a6663d"
  };
  const app = initializeApp(firebaseConfig)
  // console.log('Firebase: ',app)
  const db = getFirestore(app)
  // console.log('db:', db)
})
 