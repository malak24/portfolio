import React, { Component } from "react";
import "./Experience.scss";

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="exp-cards-wrapper">
          <div className="exp-card">
            <header class="card-header">
              <p class="position">Support Associate</p>
              <p class="location">White House Black Market</p>
              <p class="date">Aug 2019 - Oct 2019</p>
            </header>

            <ul className="exp-card-content">
              <li>
                Maintained the sales rate by quickly replenishing the sales
                floor.
              </li>
              <li>
                Increased the sales rate by strategically reorganizing the
                spaces, informing the customers about new promotions and special
                events.
              </li>
              <li>
                Funded long customer relationship by engaging with them and
                showing real interest in them
              </li>
              <li>
                Operated cash register efficiently to lessen the customers’ wait
              </li>
            </ul>
          </div>

          <div className="exp-card">
            <header class="card-header">
              <p class="position">Administrative Assistant</p>
              <p class="location">Hassle Free Clinic</p>
              <p class="date">Jan 2019 - Aug 2019</p>
            </header>

            <ul className="exp-card-content">
              <li>
                Efficiently answered high call volumes and patient inquiries.
              </li>
              <li>Managed all appointments and clinic schedules</li>
              <li>Handled payments and filled patients’ prescriptions</li>
              <li>
                Supported patients in difficult times and ensured their well
                being
              </li>
            </ul>
          </div>

          <div className="exp-card">
            <header class="card-header">
              <p class="position">Research Assistant</p>
              <p class="location">Mitovasc</p>
              <p class="date">Sep 2017 - May 2018</p>
            </header>

            <ul className="exp-card-content">
              <li>Collected, reviewed and analyzed data</li>
              <li>Summarized project results</li>
              <li>
                Prepared progress results, other articles, reports, posters and
                presentations
              </li>
              <li>
                Followed up with subjects to resolve problems or clarify data
                collected
              </li>
            </ul>
          </div>

          <div className="exp-card">
            <header class="card-header">
              <p class="position">Freshman Orientation Guide</p>
              <p class="location">University of Angers</p>
              <p class="date">Sep 2016</p>
            </header>

            <ul className="exp-card-content">
              <li>
                Offered information and answered students questions
                knowledgeably floor.
              </li>
              <li>
                Introduced new students to campus support services and building
                locations
              </li>
              <li>
                Held and directed meetings with students to keep them informed
                about their responsibilities
              </li>
              <li>Prepared and assisted students in their majors’ decisions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
