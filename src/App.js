import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signIn_signUp/signIn_signUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signin">
            <SignInSignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
