import { useState } from "react";
import "./realsign.scss";
import FormInput from "../form-input/form-input.jsx";
import Button from "../button/btn-component.jsx";
import "../button/btn.styles.scss";
import {
  signInWithGooglePopup,
  createrUserFromAuth,
} from "../../utils/firebase/firebase.components.js";

const defaultFormFields = {
  email: "",
  password: "",
};

const EmaiLSignin = () => {
  const [Fields, setFields] = useState(defaultFormFields);
  const { email, password } = Fields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...Fields, [name]: value });
  };
  const resetFormField = () => {
    setFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createrUserFromAuth(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      resetFormField();
    } catch (error) {}
  };

  return (
    <div className="SignUp">
      <h2>Already have an account ?</h2>
      <span>Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit">SigIn</Button>
        <Button onClick={SignInWithGoogle}> Google SignIn</Button>
      </form>
    </div>
  );
};

export default EmaiLSignin;
