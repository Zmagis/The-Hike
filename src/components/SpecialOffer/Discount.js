import React from "react";
import Fade from "react-reveal/Fade";

class Discount extends React.Component {
  state = {
    discountStart: 0,
    DiscountEnd: 100
  };

  percentage = () => {
    if (this.state.discountStart < this.state.DiscountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 5);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <h2>Special Offer</h2>
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Discount;
