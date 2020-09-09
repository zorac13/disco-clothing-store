import React from "react";
import { Switch, Route } from "react-router-dom";

import login from "./pages/login-page/login-page.component";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/login" component={login} />
      </Switch>
    </div>
  );
}

export default App;
