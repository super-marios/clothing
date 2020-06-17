import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSingUpPage from "./pages/signin-and-signup/signin-and-signup";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
