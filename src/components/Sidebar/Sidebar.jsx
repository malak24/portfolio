import React, { Component } from "react";
import { NavLink} from "react-router-dom";

import "./Sidebar.scss";

import home from "../../assets/home.svg";
import experience from "../../assets/experience.svg";
import projects from "../../assets/projects.svg";
import skills from "../../assets/skills.svg";
import education from "../../assets/education.svg";
import contact from "../../assets/contact.svg";
import resume from "../../assets/resume.svg";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar" className="menu">
        <div className="name">
          <p className="first-name">MALAK</p>
          <p className="last-name">KATAIE</p>
        </div>

        <ul className="menu-list">
          <li className="list-items">
            <img className="list-icons" src={home}></img>
            <NavLink className="items-title" to="/">
              Home
            </NavLink>
          </li>

          <li className="list-items">
            <img className="list-icons" src={experience}></img>
            <NavLink className="items-title">Experience</NavLink>
          </li>

          <li className="list-items">
            <img className="list-icons" src={projects}></img>
            <NavLink className="items-title">Projects</NavLink>
          </li>

          <li className="list-items">
            <img className="list-icons" src={skills}></img>
            <NavLink className="items-title">Skills</NavLink>
          </li>

          <li className="list-items">
            <img className="list-icons" src={education}></img>
            <NavLink className="items-title">Education</NavLink>
          </li>

          <li className="list-items">
            <img className="list-icons" src={contact}></img>
            <NavLink className="items-title">Contact</NavLink>
          </li>

          <li className="list-items">
            <img className="list-icons" src={resume}></img>
            <NavLink className="items-title">Resume</NavLink>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;

  // <li><NavLink to='/'>Accounts</NavLink></li>
  // <li><NavLink to='/records'>Records</NavLink></li>
  // <li><NavLink to='/cashflow'>Cash Flow</NavLink></li>
  // <li><NavLink to='/categoryExpense'>Expense by category</NavLink></li>
  // <li><NavLink to='/priorityExpense'>Expense by priority</NavLink></li>

