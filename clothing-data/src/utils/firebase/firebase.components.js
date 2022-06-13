
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCsM1fhkexC_q-hrAAZrMo0DMq0lA6H-uA",
  authDomain: "clothing-843a1.firebaseapp.com",
  projectId: "clothing-843a1",
  storageBucket: "clothing-843a1.appspot.com",
  messagingSenderId: "264192511496",
  appId: "1:264192511496:web:bc63281c9cf70118a34bbd"
};




const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

export const db  = getFirestore();
export const createUserdatafromAuth = async (userAuth)=>{
  const userRef = doc(db, "users", userAuth.uid);
  console.log(userRef);
}
