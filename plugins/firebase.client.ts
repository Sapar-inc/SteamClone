// plugins/firebase.client.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBkv2_EwrKWlbu9Vji6ufqM7ei9VquuAaw",
    authDomain: "steamcloneback-end.firebaseapp.com",
    projectId: "steamcloneback-end",
    storageBucket: "steamcloneback-end.firebasestorage.app",
    messagingSenderId: "750295950856",
    appId: "1:750295950856:web:dab7ed2705b2b1a32913bd",
    measurementId: "G-VJP0HD2510"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  return {
    provide: {
      db,
      auth
    }
  }
});
