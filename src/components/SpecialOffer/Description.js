import React from "react";
import Fade from "react-reveal/Fade";

const Description = props => {
  return (
    <Fade>
      <div className="center_wrapper">
        <div className="highlight_description">
          <i
            className="fas fa-quote-left"
            style={{ color: "#c4c2c1", paddingRight: 10 }}
          ></i>
          Let's take our hearts for a walk in the woods & listen to the magic
          whispers of old trees...
          <i
            className="fas fa-quote-left"
            style={{ color: "#c4c2c1", paddingLeft: 10 }}
          ></i>
        </div>
      </div>
    </Fade>
  );
};

export default Description;
