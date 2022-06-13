import { signInWithGooglePopup, createUserdatafromAuth } from "../../../../utils/firebase/firebase.components"



const Sign = ()=>{
   const handlepopupSignin = async ()=>{
       const {user} = await signInWithGooglePopup();
       createUserdatafromAuth(user);
   }
    return(
        <div>
        <h1>
        Sign in Page
        </h1>
        <button onClick={ handlepopupSignin }>
        Sign With Google
        </button>
        
        </div>

    )
}

export default Sign