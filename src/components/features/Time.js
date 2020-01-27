import React from "react";

import "./Time.css";

import Bounce from "react-reveal/Bounce";

class Time extends React.Component {
  state = {
    deadline: "Mar, 20, 2020",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  countDown = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / 1000 / 60 / 60) % 24);
      const days = Math.floor(time / 1000 / 60 / 60 / 24);
      this.setState({
        seconds,
        minutes,
        hours,
        days
      });
    }
  };

  componentDidMount() {
    setInterval(() => this.countDown(this.state.deadline), 1000);
  }

  render() {
    return (
      <Bounce left delay={300}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in:</div>

          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hours</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Bounce>
    );
  }
}

export default Time;
