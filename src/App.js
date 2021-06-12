import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Main from "./components/Main/Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        ["../../../assets/ham1.jpg", "This is my cute little hamster Peanut!"],
        ["../../../assets/ham2.jpg", "Another picture of Peanut..."],
        ["../../../assets/animal2.jpg", "I also LOVE animals"],
        ["../../../assets/animal1.jpg", "And since cats are animals ..."],
        ["../../../assets/ham2.jpg", "But first coffee.."],
        ["../../../assets/ham2.jpg", "I like collecting meaningful mugs"],
        ["../../../assets/ham2.jpg", "The struggle is real!"],
        ["../../../assets/ham2.jpg", "I live in Toronto"],
        ["../../../assets/ham2.jpg", "I was born in France"],
        ["../../../assets/ham2.jpg", "And lived close to Paris"],
        ["../../../assets/ham2.jpg", "When life throws thorns...hunt for roses"],
        ["../../../assets/ham2.jpg", "I collect roses ... virtually"],
        ["../../../assets/ham2.jpg", "Reading is to mind what exercise is to the body",],
        ["../../../assets/ham2.jpg", "In the long run, you only hit what you aim at!",],
        ["../../../assets/ham2.jpg", "I cook, what's your superpower?"],
        ["../../../assets/ham2.jpg", "And for the fun time, I embroider"],
        ["../../../assets/ham2.jpg", "I learn languages because their sounds tickle my ears",],
        ["../../../assets/ham2.jpg", "And to frame memories, I take pictures"],
        ["../../../assets/ham2.jpg", "Nature is breathtaking"],
        ["../../../assets/ham2.jpg", "I love to watch my plants grow a bit everyday just like I do",],
        ["../../../assets/ham2.jpg", "This beauty can't be real!"],
        ["../../../assets/ham2.jpg", "One more flower picture"],
        ["../../../assets/ham2.jpg", "I promise, this is the last!"],
        ["../../../assets/ham2.jpg", "Not all classrooms have 4 walls"],
        ["../../../assets/ham2.jpg", "Learning doesn't stop after graduation"],
      ]
    };
  }


  
    // componentDidMount() {
    //   this.getData();
    // }

    render() {
      return (
        <div className="app">
          <Sidebar />
          <Main />
        </div>
      );
    }

  }

export default App;
