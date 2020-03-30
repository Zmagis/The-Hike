import React from "react";

import "./registrationForm.css";

import Button from "../UI/Button";

const RegistrationForm = props => {
  return (
    <div className="center_wrapper ">
      <form className="form">
        <h1 style={{ textAlign: "center" }}>Registration form</h1>
        <h3>Date</h3>

        <input type="text" name="name" placeholder="Your Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="email" name="email" placeholder="Email" />

        <Button>Send</Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
