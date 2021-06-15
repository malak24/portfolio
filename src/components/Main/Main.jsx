import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/experience" component={Experience}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/resume" component={Resume}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
