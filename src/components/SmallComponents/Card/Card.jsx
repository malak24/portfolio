import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.cards).map((keyName, keyIndex) => (
          <div className="card">
            <div key={uuidv4()}>
              <img
                src={this.props.cards[keyName].src}
                alt="Placeholder image"
              />

              <p className="card-content">{this.props.cards[keyName].text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
