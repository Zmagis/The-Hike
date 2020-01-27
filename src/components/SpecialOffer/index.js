import React from "react";

import Description from "./Description";
import Discount from "./Discount";

import "./SpecialOffer.css";

const Highlights = props => {
  return (
    <div className="highlight_wrapper">
      <Discount />
      <Description />
    </div>
  );
};

export default Highlights;
