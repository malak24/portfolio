import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

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
      <aside className="sidebar">
        <ul className="menu-list">
          <li className="list-items">
            <img className="list-icons" src={profile} alt="icon"></img>
            <Link to="/" className="items-title">
              About me
            </Link>
          </li>

          <li className="list-items">
            <img className="list-icons" alt="icon" src={experience}></img>
            <Link to="/experience" className="items-title">
              Experience
            </Link>
          </li>

          <li className="list-items">
            <img className="list-icons" alt="icon" src={projects}></img>
            <Link to="/projects" className="items-title">
              Projects
            </Link>
          </li>

          <li className="list-items">
            <img className="list-icons" alt="icon" src={skills}></img>
            <Link to="/skills" className="items-title">
              Skills
            </Link>
          </li>

          <li className="list-items">
            <img className="list-icons" alt="icon" src={education}></img>
            <Link to="/education" className="items-title">
              Education
            </Link>
          </li>

          <li className="list-items">
            <img className="list-icons" alt="icon" src={contact}></img>
            <Link to="/contact" className="items-title">
              Contact
            </Link>
          </li>

          <li className="list-items">
            <img className="list-icons" alt="icon" src={resume}></img>
            <Link to="/resume" className="items-title">
              Resume
            </Link>
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
