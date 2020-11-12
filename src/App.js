import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
