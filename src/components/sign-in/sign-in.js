import React, { useState } from "react";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";

import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../firebase/firebase.utils";

const SignIn = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // setEmail("");
    // setPassword("");

    setInfo({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    console.log(value, name);

    setInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={info.email}
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          name="password"
          type="password"
          value={info.password}
          required
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
