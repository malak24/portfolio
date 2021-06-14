import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Main from "./components/Main/Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: {
        1:
        {
          'src': "../../../assets/ham1.jpg",
          'text': "This is my cute little hamster Peanut!"
        },
        2:
        {
          'src': "../../../assets/ham1.jpg",
          'text': "Another picture of Peanut..."
        },
        3: {
          'src': "../../../assets/ham1.jpg",
          'text': "I also LOVE animals"
        },
        4: {
          'src': "../../../assets/ham1.jpg",
          'text': "And since cats are animals ..."
        },
        5: {
          'src': "../../../assets/ham1.jpg",
          'text': "But first coffee.."
        },
        6: {
          'src': "../../../assets/ham1.jpg",
          'text': "I like collecting meaningful mugs"
        },
        7: {
          'src': "../../../assets/ham1.jpg",
          'text': "The struggle is real!"
        },
        8: {
          'src': "../../../assets/ham1.jpg",
          'text': "I live in Toronto"
        },
        9: {
          'src': "../../../assets/ham1.jpg",
          'text': "I was born in France"
        },
        10: {
          'src': "../../../assets/ham1.jpg",
          'text': "And lived close to Paris"
        },
        11: {
          'src': "../../../assets/ham1.jpg",
          'text': "When life throws thorns...hunt for roses"
        },
        12: {
          'src': "../../../assets/ham1.jpg",
          'text': "I collect roses ... virtually"
        },
        13: {
          'src': "../../../assets/ham1.jpg",
          'text': "Reading is to mind what exercise is to the body"
        },
        14: {
          'src': "../../../assets/ham1.jpg",
          'text': "In the long run, you only hit what you aim at!"
        },
        15: {
          'src': "../../../assets/ham1.jpg",
          'text': "I cook, what's your superpower?"
        },
        16: {
          'src': "../../../assets/ham1.jpg",
          'text': "And for the fun time, I embroider"
        },
        17: {
          'src': "../../../assets/ham1.jpg",
          'text': "I learn languages because their sounds tickle my ears"
        },
        18: {
          'src': "../../../assets/ham1.jpg",
          'text': "And to frame memories, I take pictures"
        },
        19: {
          'src': "../../../assets/ham1.jpg",
          'text': "Nature is breathtaking"
        },
        20: {
          'src': "../../../assets/ham1.jpg",
          'text': "I love to watch my plants grow a bit everyday just like I do"
        },
        21: {
          'src': "../../../assets/ham1.jpg",
          'text': "This beauty can't be real!"
        },
        22: {
          'src': "../../../assets/ham1.jpg",
          'text': "One more flower picture"
        },
        23: {
          'src': "../../../assets/ham1.jpg",
          'text': "I promise, this is the last!"
        },
        24: {
          'src': "../../../assets/ham1.jpg",
          'text': "Not all classrooms have 4 walls"
        },
        25: {
          'src': "../../../assets/ham1.jpg",
          'text': "Learning doesn't stop after graduation"
        },
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
          <Main cards={this.state.cards}/>
        </div>
      )
    }

}

export default App;
