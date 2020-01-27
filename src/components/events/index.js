import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import "./events.css";
import Button from "../UI/Button";

class Pricing extends Component {
  state = {
    dates: ["March", "June", "September"],
    positions: ["2", "3", "24"],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Partem qualisque ne eam, in vim perpetua suavitate, mazim doming labitur no vim. ",
      " Qui ut iriure suavitate adipiscing, nisl possit no quo."
    ],
    links: [
      "https://www.google.com/?hl=lt",
      "https://www.google.com/?hl=lt",
      "https://www.google.com/?hl=lt"
    ],
    delay: [500, 0, 500]
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
            <Button link={this.state.links[i]}>GO!</Button>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper event_section">
          <h2>Events</h2>
          <div className="events_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
