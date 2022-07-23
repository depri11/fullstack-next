import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    apiKey: 'AIzaSyCTAI73Y68DCX3uXA2fyHJXammprWyy2QA',
    authDomain: 'reddit-clone-be38d.firebaseapp.com',
    projectId: 'reddit-clone-be38d',
    storageBucket: 'reddit-clone-be38d.appspot.com',
    messagingSenderId: '503097184937',
    appId: '1:503097184937:web:c66a3ab8bc91706e60cfb8',
}

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { app, firestore, auth, storage }
