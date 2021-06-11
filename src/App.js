import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Main from "./components/Main/Main";

class App extends Component {

  // componentDidMount() {
  //   this.getData();
  // }


  render() {
    return (
      <div className="app">
        <Sidebar/>
        <Main />
      </div>
    );
  }
}

export default App;
