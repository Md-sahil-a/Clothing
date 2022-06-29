import { useState } from "react";
import "./realsign.scss";
import FormInput from "../form-input/form-input.jsx";
import Button from "../button/btn-component.jsx";
import "../button/btn.styles.scss";
import {
  signInWithGooglePopup,
  createrUserFromAuth,
  Signinwithmail,
} from "../../utils/firebase/firebase.components.js";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const defaultFormFields = {
  email: "",
  password: "",
};

const EmaiLSignin = () => {
  const [Fields, setFields] = useState(defaultFormFields);
  const { email, password } = Fields;
  const { setCurrentUser } = useContext(UserContext);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await Signinwithmail(email, password);
      setCurrentUser(user);

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        case "auth/user-not-found":
          alert("User not registered with this email");
          break;
        default:
          console.log(error);
      }
    }
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
        <div className="btn-container">
          <Button type="submit">SigIn</Button>
          <Button type="button" buttonTypes="google" onClick={SignInWithGoogle}>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmaiLSignin;
