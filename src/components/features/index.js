import React from "react";

import Carrousel from "./Carousel";
import Time from "./Time";

import "./featured.css";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="title">
        <div className="wrapper">Švenčionėliai</div>
      </div>
      <Time />
    </div>
  );
};

export default Featured;
