import React from "react";
import Zoom from "react-reveal/Zoom";

import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

import "./Info.css";

const Info = props => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="in_wrapper">
          <Zoom duration={500}>
            <div className="in_item">
              <div className="in_outer">
                <div className="in_inner">
                  <div className="in_icon_square bck_red"></div>
                  <div
                    className="in_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className="in_title">Event Date & Time</div>
                  <div className="in_desc">
                    Lorem ipsum dolor sit amet, mea rationibus comprehensam no,
                    ei persius impedit eos.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="in_item">
              <div className="in_outer">
                <div className="in_inner">
                  <div className="in_icon_square bck_yellow"></div>
                  <div
                    className="in_icon"
                    style={{ background: `url(${icon_location})` }}
                  ></div>
                  <div className="in_title">Event Location</div>
                  <div className="in_desc">
                    Vim id sonet ornatus. At duo impetus oportere. Has ad
                    euismod deseruisse mnesarchum.
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Info;
