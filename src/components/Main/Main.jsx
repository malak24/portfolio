import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/experience" component={experience}></Route> */}
        {/* <Route exact path="/projects" component={projects}></Route> */}
        {/* <Route exact path="/skills" component={skills}></Route> */}
        {/* <Route exact path="/education" component={education}></Route> */}
        {/* <Route exact path="/contact" component={contact}></Route> */}
        {/* <Route exact path="/resume" component={resume}></Route> */}
      </Switch>
    );
  }
}

export default Main;
