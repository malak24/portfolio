import React, { Component } from "react";
import Card from '../../SmallComponents/Card/Card'
import ham1 from "../../../assets/ham1.jpg";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <Card cards={this.props.cards}/>
      </div>
    );
  }
}

export default Home;
