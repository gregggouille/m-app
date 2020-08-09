import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
