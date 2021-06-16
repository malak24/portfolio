import React, { Component } from "react";
import "./App.scss";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="topbar"></div>
        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
