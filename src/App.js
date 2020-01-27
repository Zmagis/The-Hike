import React from "react";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/features";
import Info from "./components/Info/Info";
import SpecialOffer from "./components/SpecialOffer";
import Events from "./components/events";
import Location from "./components/Location/Location";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="start">
        <Featured />
      </Element>
      <Element name="info">
        <Info />
      </Element>
      <Element name="highlight">
        <SpecialOffer />
      </Element>
      {/* <Element name="price">
        <Events />
      </Element> */}
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
