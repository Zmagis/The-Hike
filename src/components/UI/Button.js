import React from "react";
import Button from "@material-ui/core/Button";

// import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: "#ffa800",
        color: "white",
        paddingRight: 20,
        margin: 20
      }}
    >
      {/* className="iconImage" */}
      <i className="fas fa-hiking iconImage"></i>
      {props.children}
    </Button>
  );
};

export default MyButton;
