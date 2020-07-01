import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage.component";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const HatsPage = () => (
  <div>
    <p>Hello World</p>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/hats" compoent={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
