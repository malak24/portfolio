import React, { Component } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

import "./Sidebar.scss";

import profile from "../../assets/profile.png";
import experience from "../../assets/experience.svg";
import projects from "../../assets/projects.svg";
import skills from "../../assets/skills.svg";
import education from "../../assets/education.svg";
import contact from "../../assets/contact.svg";
import resume from "../../assets/resume.svg";

class Sidebar extends Component {
  render() {
    return (
      <Router>
        <aside className="sidebar">
          <ul className="menu-list">
            <li className="list-items">
              <img className="list-icons" src={profile}></img>
              <NavLink to="/" className="items-title" to="/">
                About me
              </NavLink>
            </li>

            <li className="list-items">
              <img className="list-icons" src={experience}></img>
              <NavLink to="/experience" className="items-title">
                Experience
              </NavLink>
            </li>

            <li className="list-items">
              <img className="list-icons" src={projects}></img>
              <NavLink to="/projects" className="items-title">
                Projects
              </NavLink>
            </li>

            <li className="list-items">
              <img className="list-icons" src={skills}></img>
              <NavLink to="/skills" className="items-title">
                Skills
              </NavLink>
            </li>

            <li className="list-items">
              <img className="list-icons" src={education}></img>
              <NavLink to="/education" className="items-title">
                Education
              </NavLink>
            </li>

            <li className="list-items">
              <img className="list-icons" src={contact}></img>
              <NavLink to="/contact" className="items-title">
                Contact
              </NavLink>
            </li>

            <li className="list-items">
              <img className="list-icons" src={resume}></img>
              <NavLink to="/resume" className="items-title">
                Resume
              </NavLink>
            </li>
          </ul>
        </aside>
      </Router>
    );
  }
}

export default Sidebar;

// <li><NavLink to='/'>Accounts</NavLink></li>
// <li><NavLink to='/records'>Records</NavLink></li>
// <li><NavLink to='/cashflow'>Cash Flow</NavLink></li>
// <li><NavLink to='/categoryExpense'>Expense by category</NavLink></li>
// <li><NavLink to='/priorityExpense'>Expense by priority</NavLink></li>
