import React, { useState } from "react";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Route exact path="/" component={Login} />

    //     {/* 
    //       Build a PrivateRoute component that will 
    //       display BubblePage when you're authenticated 
    //     */}
    //   </div>
    // </Router>

    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Bubble Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
