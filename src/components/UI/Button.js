import React from "react";
// import Button from "@material-ui/core/Button";

const MyButton = props => {
  return (
    <button
      onClick={props.click}
      style={{
        background: "#ffa800",
        color: "white",
        padding: "10px 20px 10px 10px",
        borderRadius: "5px",
        border: "none",
        margin: 20,
        cursor: "pointer"
      }}
    >
      <i className="fas fa-hiking iconImage"></i>
      {props.children}
    </button>
  );
};

export default MyButton;
