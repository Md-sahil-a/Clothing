
import { useState } from "react"
import {CreateAuthWithEmail, createrUserFromAuth} from '../../utils/firebase/firebase.components.js'

import FormInput from "../form-input/form-input.jsx"

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
    const resetFormField = ()=>{
        setFields(defaultFormFields);
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
            resetFormField();
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
        <FormInput
        label="displayName"
        type="text"
        required
        onChange={handleChange}
        name="displayName"
        value={displayName}
        />
        <FormInput
        label="email"
        required
        type="email"
        onChange={handleChange}
        name="displayName"
        value={displayName}
        />
        <FormInput
        label="password"
        type="password"
        required
        name="password"
        value={password}
        onChange={handleChange}
        />
        <FormInput
        label="Confirm Password"
        type="password"
        required
        name="ConfirmPassword"
        value={ConfirmPassword}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EmailLSignup;