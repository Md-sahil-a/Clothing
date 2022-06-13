
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

export const db = getFirestore();

export const createrUserFromAuth = async (userAuth)=>{
  const userDocRef =  doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userDocRef);
  console.log(snapShot.exists());
  if(!snapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
      })

    }catch(error){
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
}


//if user does not exist 
 //create / set the document with the data  from userAuth in my collection
//if user exists
 // return user Doc ref 