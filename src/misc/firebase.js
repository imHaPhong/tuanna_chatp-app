/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyD7uWDedRLDi_81FY9abkBzP9MYxSL9Bjw",
    authDomain: "re-chat-web.firebaseapp.com",
    projectId: "re-chat-web",
    storageBucket: "re-chat-web.appspot.com",
    messagingSenderId: "239040141045",
    appId: "1:239040141045:web:bb2351ebe4d709eb8897bc"
  };

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database()
export const storage = app.storage()