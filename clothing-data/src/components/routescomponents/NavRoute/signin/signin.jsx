import { signInWithGooglePopup } from "../../../../utils/firebase/firebase.components"



const Sign = ()=>{
   const handlepopupSignin = async ()=>{
       const res = await signInWithGooglePopup();
       console.log(res);
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