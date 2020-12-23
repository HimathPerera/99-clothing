import React, { useState } from "react";
import Button from "../custom-button/custom-button.component";
import Input from "../custom-input/custom-input.component";
import { signInWithGoogle } from "../../firebase/firebase.util";
import firebase from "firebase/app";

import "./sign-In.style.scss";

export default function SignIn() {
  const [cred, setcred] = useState("");

  const handleChange = (e) => {
    setcred({
      ...cred,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(cred.signinEmail, cred.signinPassword);
  };

  return (
    <div className="sign-in">
      <h2>I Already Have an Account</h2>
      <span>Sign in with your Email and Password</span>

      <form onSubmit={handleClick}>
        <Input
          name="email"
          type="email"
          id="signinEmail"
          label="email"
          data={cred.signinEmail}
          required
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          id="signinPassword"
          label="password"
          data={cred.signinPassword}
          required
          onChange={handleChange}
        />
        <div className="buttons">
          <Button onSubmit={handleClick}>Sign in</Button>
          <Button onClick={signInWithGoogle} isgoogle>
            Signin with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
