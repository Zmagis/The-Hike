import React from "react";
import Slider from "react-slick";

import oneDesktop from "../../resources/images/oneDesktop.jpg";
import one from "../../resources/images/one.jpg";
import two from "../../resources/images/two.jpg";
import three from "../../resources/images/three.jpg";

const Carrousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  let picture;
  if (window.innerWidth > 750) {
    picture = oneDesktop;
  } else {
    picture = one;
  }

  return (
    <div
      className="carrousel_wrapper"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{ background: `url(${picture})`, height: "100vh" }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{ background: `url(${two})`, height: "100vh" }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{ background: `url(${three})`, height: "100vh" }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
