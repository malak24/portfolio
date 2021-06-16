import React, { Component } from "react";
import "./About.scss";

import ham from "../../../assets/ham.jpg";
import animal1 from "../../../assets/animal1.jpg";
import animal2 from "../../../assets/animal2.jpg";
import coffee from "../../../assets/coffee.jpg";
import toronto from "../../../assets/toronto.jpeg";
import france from "../../../assets/france.jpg";
import code from "../../../assets/code.jpeg";
import book from "../../../assets/book.jpg";
import archery from "../../../assets/archery.jpg";
import lang from "../../../assets/lang.jpg";
import mug1 from "../../../assets/mug1.jpg";
import rose2 from "../../../assets/rose2.jpg";
import plant from "../../../assets/plant.jpg";
import rose3 from "../../../assets/rose3.jpg";
import study2 from "../../../assets/study2.png";
import me from "../../../assets/me.jpeg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="card profile">
          <img src={me} alt="Placeholder image" />
          <div>
            <div>
              <p className="profile-name">
                Hi!
                <br />
                My name is Malak Kataie. I am 25 years old and I am Full-Stack
                Engineer.
              </p>
            </div>
            <div>
              <div className="profile-experience">
                I have experience in :
                <ul>
                  <li>
                    <b>Cloud :</b> AWS EC2 - AWS S3 - AWS Route53.
                  </li>
                  <li>
                    <b>Misc :</b> Linux - Git - Jira - Postman - Vim - PopSQL -
                    VSCode.
                  </li>
                  <li>
                    <b>Languages :</b> JavaScript.
                  </li>
                  <li>
                    <b>Web :</b> Node.js - MySQL - HTML - CSCC - SASS - Express
                    - React - Bootstrap.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="profile-card-content">
                I have a background in Neurobiology that has helped me develop
                solid analytical and research skills that come in handy when I
                write code!
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* CONTAINER 1 */}
          <div className="cards-wrapper">
            <div className="card">
              <img className="card-img" src={france} alt="Placeholder image" />
              <p className="card-content">
                I was born in France , and I lived close to Paris
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={toronto} alt="Placeholder image" />
              <p className="card-content">
                Two years and a half ago I moved to Canada, Toronto
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={book} alt="Placeholder image" />
              <p className="card-content">
                I believe that reading is to mind what exercise is to the body
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={code} alt="Placeholder image" />
              <p className="card-content">
                Every time I create a webapp I learn a new technology and
                implement it to grow my knowledge.
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={lang} alt="Placeholder image" />
              <p className="card-content">
                I love languages, for now I speak French, English, Arabic,
                Turkish and I'm learning Spanish
              </p>
            </div>
          </div>

          {/* CONTAINER 2 */}
          <div className="cards-wrapper">
            <div className="card">
              <img className="card-img" src={archery} alt="Placeholder image" />
              <p className="card-content">
                In the long run, you only hit what you aim at!
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={study2} alt="Placeholder image" />
              <p className="card-content">
                I always learn new technologies because the more knowledge I
                have the more valuable I feel{" "}
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={ham} alt="Placeholder image" />
              <p className="card-content">
                I have a cute little hamster called Peanut!
              </p>
            </div>

            <div className="card">
              <img className="card-img" src={animal2} alt="Placeholder image" />
              <p className="card-content">I also LOVE animals</p>
            </div>

            <div className="card">
              <img className="card-img" src={animal1} alt="Placeholder image" />
              <p className="card-content">And since cats are animals ...</p>
            </div>
          </div>

          {/* CONTAINER 3 */}
          <div className="cards-wrapper">
            <div className="card card-small">
              <img className="card-img" src={coffee} alt="Placeholder image" />
              <p className="card-content">I am a coffee person</p>
            </div>

            <div className="card card-small">
              <img className="card-img" src={mug1} alt="Placeholder image" />
              <p className="card-content">
                I also like collecting meaningful mugs
              </p>
            </div>

            <div className="card card-small">
              <img className="card-img" src={rose2} alt="Placeholder image" />
              <p className="card-content">
                When life throws thorns at you, hunt for roses
              </p>
            </div>

            <div className="card card-small">
              <img className="card-img" src={rose3} alt="Placeholder image" />
              <p className="card-content">
                Pictures are like snapshots of code, they are a piece of
                something bigger and tmportant
              </p>
            </div>

            <div className="card card-medium">
              <img className="card-img" src={plant} alt="Placeholder image" />
              <p className="card-content">
                I love to grow plants froms seeds and watch them growing
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
