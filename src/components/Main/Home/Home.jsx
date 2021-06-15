import React, { Component } from "react";
import "./Home.scss";
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
import study2 from "../../../assets/study2.png";
import me from "../../../assets/me.jpeg";
class Home extends Component {
  render() {
    return (
      <div className="cards container">
        <div className="card profile">
          <img src={me} alt="Placeholder image" />
          <div>
            <p className="profile-card-content">
              Hi!
              <br /> My name is Malak Kataie. I am 25 years old and I am
              Full-stack engineer with experience in Javascript, React, HTML,
              CSS, and a little bit of AWS to tie them all together. <br />
              My background in Neurobiology has helped me develop solid
              analytical and research skills that come in handy when I write
              code!
            </p>
          </div>
        </div>

        {/* CONTAINER 1 */}
        <div className="cards-container">
          <div className="card">
            <img className="card-img" src={ham1} alt="Placeholder image" />
            <p className="card-content">
              This is my cute little hamster Peanut!
            </p>
          </div>

          <div className="card">
            <img className="card-img" src={ham2} alt="Placeholder image" />
            <p className="card-content">Another picture of Peanut...</p>
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

        {/* CONTAINER 2 */}
        <div className="cards-container">
          <div className="card">
            <img className="card-img" src={coffee} alt="Placeholder image" />
            <p className="card-content">But first coffee..</p>
          </div>

          <div className="card">
            <img className="card-img" src={mug1} alt="Placeholder image" />
            <p className="card-content">I like collecting meaningful mugs</p>
          </div>

          <div className="card">
            <img className="card-img" src={mug2} alt="Placeholder image" />
            <p className="card-content">The struggle is real!</p>
          </div>

          <div className="card">
            <img className="card-img" src={toronto} alt="Placeholder image" />
            <p className="card-content">I live in Toronto</p>
          </div>
        </div>

        {/* CONTAINER 3 */}
        <div className="cards-container">
          <div className="card">
            <img className="card-img" src={france} alt="Placeholder image" />
            <p className="card-content">I was born in France</p>
          </div>

          <div className="card">
            <img className="card-img" src={france2} alt="Placeholder image" />
            <p className="card-content">And lived close to Paris</p>
          </div>

          <div className="card">
            <img className="card-img" src={rose2} alt="Placeholder image" />
            <p className="card-content">
              When life throws thorns...hunt for roses
            </p>
          </div>

          <div className="card">
            <img className="card-img" src={rose1} alt="Placeholder image" />
            <p className="card-content">I collect roses ... virtually</p>
          </div>
        </div>

        {/* CONTAINER 4 */}
        <div className="cards-container">
          <div className="card">
            <img className="card-img" src={book} alt="Placeholder image" />
            <p className="card-content">
              Reading is to mind what exercise is to the body
            </p>
          </div>

          <div className="card">
            <img className="card-img" src={archery} alt="Placeholder image" />
            <p className="card-content">
              In the long run, you only hit what you aim at!
            </p>
          </div>

          <div className="card">
            <img className="card-img" src={cook} alt="Placeholder image" />
            <p className="card-content">I cook, what's your superpower?</p>
          </div>

          <div className="card">
            <img className="card-img" src={lang} alt="Placeholder image" />
            <p className="card-content">
              I learn languages because their sounds tickle my ears
            </p>
          </div>
        </div>

        {/* CONTAINER 5 */}
        <div className="cards-container">
          <div className="card">
            <img className="card-img" src={photo2} alt="Placeholder image" />
            <p className="card-content">
              And to frame memories, I take pictures
            </p>
          </div>

          <div className="card">
            <img className="card-img" src={photo1} alt="Placeholder image" />
            <p className="card-content">Nature is breathtaking</p>
          </div>

          <div className="card">
            <img className="card-img" src={plant} alt="Placeholder image" />
            <p className="card-content">
              I love to watch my plants grow a bit everyday just like I do
            </p>
          </div>

          <div className="card">
            <img className="card-img" src={rose1} alt="Placeholder image" />
            <p className="card-content">This beauty can't be real!</p>
          </div>
        </div>

        {/* CONTAINER 6 */}
        <div className="cards-container">
          <div className="card">
            <img className="card-img" src={rose2} alt="Placeholder image" />
            <p className="card-content">One more flower picture</p>
          </div>

          <div className="card">
            <img className="card-img" src={rose3} alt="Placeholder image" />
            <p className="card-content">I promise, this is the last!</p>
          </div>

          <div className="cards-container">
            <img className="card-img" src={study2} alt="Placeholder image" />
            <p className="card-content">Not all classrooms have 4 walls</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
