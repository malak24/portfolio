import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {

  render() {
    return (
      <div className="card">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />

        <div className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
    );
  }
}

export default Card;
