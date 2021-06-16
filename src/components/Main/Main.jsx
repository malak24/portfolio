import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/education" component={Education}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/resume" component={Resume}/>
      </Switch>
    );
  }
}

export default Main;
