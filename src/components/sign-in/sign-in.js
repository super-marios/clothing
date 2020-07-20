import React, { useState } from "react";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";

import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

const SignIn = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(info.email, info.password);
    } catch (error) {
      console.log(error);
    }

    setInfo({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

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
