import firebaseClient from "firebase/app";
import "firebase/auth";

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp({
    apiKey: "AIzaSyCPtRXUTDuFWHtnx7MV_nV4agoS0TyDXBc",
    authDomain: "vizweb-c51cb.firebaseapp.com",
    projectId: "vizweb-c51cb",
    storageBucket: "vizweb-c51cb.appspot.com",
    messagingSenderId: "90787670964",
    appId: "1:90787670964:web:b641a050274ca993fda0e1",
  });
  firebaseClient.auth().setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL);
  window.firebase = firebaseClient
}

export { firebaseClient };
