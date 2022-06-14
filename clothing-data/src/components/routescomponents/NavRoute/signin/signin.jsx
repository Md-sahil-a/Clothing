import { signInWithGooglePopup, createrUserFromAuth, auth, signInWithGoogleRedirect } from "../../../../utils/firebase/firebase.components"

import EmailLSignup from "../../../Signin-with-mail/signinwithform";


const Sign = ()=>{
   const handlepopupSignin = async ()=>{
       const {user} = await signInWithGooglePopup();
       createrUserFromAuth(user);
   }
    return(
        <div>
        <h1>
        Sign in Page
        </h1>
        <button onClick={ handlepopupSignin }>
        Sign With Google Pop Up
        </button>
        <EmailLSignup/>
        </div>

    )
}

export default Sign