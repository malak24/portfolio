import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Main from "./components/Main/Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: {
        
      },
    };
  }

    // componentDidMount() {
    //   this.getData();
    // }

    render() {
      return (
        <div className="app">
          <Sidebar />
          <Main cards={this.state.cards} />
          {/* <button onClick={()=>console.log(this.state.cards[1].src) }>
          </button> */}
        </div>
      )
    }

}

export default App;
