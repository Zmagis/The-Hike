import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import "./events.css";
import Button from "../UI/Button";
import RegistrationForm from "../registrationForm/registrationForm";

class Pricing extends Component {
  state = {
    dates: ["March", "June", "September"],
    positions: ["2", "3", "24"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Partem qualisque ne eam, in vim perpetua suavitate, mazim doming labitur no vim. ",
      " Qui ut iriure suavitate adipiscing, nisl possit no quo."
    ],
    delay: [500, 0, 500],
    showRegistrationForm: false
  };

  showBoxes = () =>
    this.state.dates.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="event_item">
          <div className="event_inner_wrapper">
            <div className="event_title">
              <span>{this.state.dates[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="event_description">{this.state.description[i]}</div>
            <Button click={this.handleCLick}>GO!</Button>
          </div>
        </div>
      </Zoom>
    ));

  handleCLick = () => {
    this.setState(prevState => {
      return { showRegistrationForm: !prevState };
    });
  };
  render() {
    console.log(this.state.showRegistrationForm);
    let form = null;
    if (this.state.showRegistrationForm) {
      form = <RegistrationForm show={this.state.RegistrationForm} />;
    }
    return (
      <React.Fragment>
        <div className="bck_black">
          <div className="center_wrapper event_section">
            <h2>Events</h2>
            <div className="events_wrapper">{this.showBoxes()}</div>
          </div>
        </div>
        {form}
      </React.Fragment>
    );
  }
}

export default Pricing;
