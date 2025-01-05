import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDNHsTvx8UTnoOgThdZrNA5-voSVA2ZId8",
	authDomain: "socialnetwork-fae59.firebaseapp.com",
	databaseURL: "https://socialnetwork-fae59-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "socialnetwork-fae59",
	storageBucket: "socialnetwork-fae59.appspot.com",
	messagingSenderId: "854874053101",
	appId: "1:854874053101:web:ca6e7140722c284581efe4",
	measurementId: "G-72F8QC6BNC"
  };
  
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
