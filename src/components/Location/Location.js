import React from "react";

import "./location.css";

const Location = () => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.3447587912756!2d25.99142116088097!3d55.16369078549562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd32fbe5e596791ec!2zxaB2ZW7EjWlvbsSXbGlhaQ!5e0!3m2!1slt!2slt!4v1579782924453!5m2!1slt!2slt"
      width="100%"
      height="700"
      frameBorder="0"
      allowFullScreen=""
    ></iframe>
    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default Location;
