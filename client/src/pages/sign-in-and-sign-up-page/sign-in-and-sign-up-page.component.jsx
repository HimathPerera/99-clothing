import React from "react";
import "./sign-in-and-sign-up-page.style.scss";
import SignIn from "../../components/sign-In/sign-In.component";
import Signup from "../../components/sign-up/sign-up.component";

export default function SignInAndSignUpPage() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <div className="line"></div>
      <Signup />
    </div>
  );
}
