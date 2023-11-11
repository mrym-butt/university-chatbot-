import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      </div>
    </Router>
    // );
  );
}

export default App;
