import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Card.scss";

import ham1 from "../../../assets/ham1.jpg";
import ham2 from "../../../assets/ham2.jpg";
import animal1 from "../../../assets/animal1.jpg";
import animal2 from "../../../assets/animal2.jpg";
import coffee from "../../../assets/coffee.jpg";
import toronto from "../../../assets/toronto.jpeg";
import france from "../../../assets/france.jpg";
import france2 from "../../../assets/france2.jpg";
import rose1 from "../../../assets/rose1.jpg";
import rose2 from "../../../assets/rose2.jpg";
import book from "../../../assets/book.jpg";
import archery from "../../../assets/archery.jpg";
import cook from "../../../assets/cook.jpg";
import lang from "../../../assets/lang.jpg";
import mug1 from "../../../assets/mug1.jpg";
import mug2 from "../../../assets/mug2.jpg";
import photo1 from "../../../assets/photo1.jpg";
import photo2 from "../../../assets/photo2.jpg";
import plant from "../../../assets/plant.jpg";
import rose3 from "../../../assets/rose3.jpg";
import study1 from "../../../assets/study1.png";
import study2 from "../../../assets/study2.png";


class Card extends Component {
  render() {
    let cards = {
      1: {
        src: ham1,
        text: "This is my cute little hamster Peanut!",
      },
      2: {
        src: ham2,
        text: "Another picture of Peanut...",
      },
      3: {
        src: animal2,
        text: "I also LOVE animals",
      },
      4: {
        src: animal1,
        text: "And since cats are animals ...",
      },
      5: {
        src: coffee,
        text: "But first coffee..",
      },
      6: {
        src: mug1,
        text: "I like collecting meaningful mugs",
      },
      7: {
        src: mug2,
        text: "The struggle is real!",
      },
      8: {
        src: toronto,
        text: "I live in Toronto",
      },
      9: {
        src: france,
        text: "I was born in France",
      },
      10: {
        src: france2,
        text: "And lived close to Paris",
      },
      11: {
        src: rose2,
        text: "When life throws thorns...hunt for roses",
      },
      12: {
        src: rose1,
        text: "I collect roses ... virtually",
      },
      13: {
        src: book,
        text: "Reading is to mind what exercise is to the body",
      },
      14: {
        src: archery,
        text: "In the long run, you only hit what you aim at!",
      },
      15: {
        src: cook,
        text: "I cook, what's your superpower?",
      },
      16: {
        src: lang,
        text: "I learn languages because their sounds tickle my ears",
      },
      17: {
        src: photo2,
        text: "And to frame memories, I take pictures",
      },
      18: {
        src: photo1,
        text: "Nature is breathtaking",
      },
      19: {
        src: plant,
        text: "I love to watch my plants grow a bit everyday just like I do",
      },
      20: {
        src: rose1,
        text: "This beauty can't be real!",
      },
      21: {
        src: rose2,
        text: "One more flower picture",
      },
      22: {
        src: rose3,
        text: "I promise, this is the last!",
      },
      23: {
        src: study1,
        text: "Not all classrooms have 4 walls",
      },
      24: {
        src: study2,
        text: "Learning doesn't stop after graduation",
      },
    };

    return (
      <div>
        {Object.keys(cards).map((keyName) => (
          <div className="card">
            <div key={uuidv4()}>
              <img src={cards[keyName].src} alt="Placeholder image" />

              <p className="card-content">{cards[keyName].text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
