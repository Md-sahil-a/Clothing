
import { useState } from "react"
import {CreateAuthWithEmail, createrUserFromAuth} from '../../utils/firebase/firebase.components.js'

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    ConfirmPassword:""
}

const EmailLSignup = ()=>{
    const [Fields,setFields ] = useState(defaultFormFields);
    const {displayName, email, password, ConfirmPassword} = Fields;

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFields({...Fields, [name]: value});
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== ConfirmPassword){
            alert("Wrong PassWord");
            return;
        }
        try{
            const {user} = await CreateAuthWithEmail(email, password)
            await createrUserFromAuth(user, {displayName});
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email is already in use");
            }else{
                console.log("getting error", error);
            }
            
        }
    }

    return (
        <div>
        <h1>Sign UP with Email and Password</h1>
        <form onSubmit={handleSubmit}>
        <label>DisplayName</label>
        <input type="name" required  onChange={handleChange} name ="displayName" value={displayName}/>
        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />
        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password}  />
        <label>Confirm Password</label>
        <input type ="password" required onChange={handleChange} name="ConfirmPassword" value={ConfirmPassword} />
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EmailLSignup