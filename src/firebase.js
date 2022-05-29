import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyDDaZOV9nh64Gfq7oam_ItlLrxYnUg1q10",
  authDomain: "e-clone-app-37421.firebaseapp.com",
  databaseURL: "https://e-clone-app-37421.firebaseio.com",
  projectId: "e-clone-app-37421",
  storageBucket: "e-clone-app-37421.appspot.com",
  messagingSenderId: "742197031212",
  appId: "1:742197031212:web:ba725b0911e84c7d517c89",
  measurementId: "G-6HVX9KP53L" 

});
const auth = firebase.auth();
export {auth};