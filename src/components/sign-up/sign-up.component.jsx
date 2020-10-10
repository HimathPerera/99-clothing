import React, { useState } from "react";
import Button from "../custom-button/custom-button.component";
import Input from "../custom-input/custom-input.component";
import { createUserProfile } from "../../firebase/firebase.util";
import firebase from "firebase/app";
import "./sign-up.style.scss";

export default function Signup() {
  const [cred, setcred] = useState("");

  const handleChange = (e) => {
    setcred({
      ...cred,
      [e.target.id]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    if (cred.signupPassword !== cred.confirmPassword) {
      e.preventDefault();
      alert("passwords don't match!");
      return;
    }
    var displayName = cred.Name;
    e.preventDefault();
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(cred.signupEmail, cred.signupPassword);

      createUserProfile(user, { displayName });
    } catch (error) {
      console.log("500", error);
    }
  };

  return (
    <div className="sign-up">
      <h2>I'm not a member yet</h2>
      <span>Sign up with your Email or google</span>

      <form onSubmit={handleClick}>
        <Input
          name="email"
          type="email"
          id="signupEmail"
          label="email"
          data={cred.signupEmail}
          required
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          id="signupPassword"
          label="password"
          data={cred.signupPassword}
          required
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          label="confirm password"
          data={cred.confirmPassword}
          required
          onChange={handleChange}
        />
        <Input
          name=" name"
          type="text"
          id="Name"
          label=" name"
          data={cred.Name}
          required
          onChange={handleChange}
        />

        <div className="buttons">
          <Button onSubmit={handleClick}>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
