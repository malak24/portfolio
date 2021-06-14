import React, { Component } from "react";
import Card from '../../SmallComponents/Card/Card'
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <Card cards={this.props.cards}/>
      </div>
    );
  }
}

export default Home;
