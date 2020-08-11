import React, { useState } from "react";
import Button from "../custom-button/custom-button.component";
import Input from "../custom-input/custom-input.component";
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
    console.log(cred);
  };

  return (
    <div className="sign-in">
      <h2>I Already Have an Account</h2>
      <span>Sign in with your Email and Password</span>

      <form onSubmit={handleClick}>
        <Input
          name="email"
          type="email"
          id="email"
          label="hello"
          data={cred.email}
          required
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          id="password"
          label="hello"
          data={cred.password}
          required
          onChange={handleChange}
        />

        <Button onSubmit={handleClick}>Sign in</Button>
      </form>
    </div>
  );
}
