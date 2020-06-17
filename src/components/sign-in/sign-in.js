import React, { useState } from "react";

import "./sign-in.scss";

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
        <input
          name="email"
          type="email"
          value={info.email}
          required
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          name="password"
          type="password"
          value={info.password}
          required
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
