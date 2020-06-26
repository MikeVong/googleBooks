import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Saved from "./pages/Saved";


class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
