import React from "react";
import Input from "../compontents/Input/Input";

const Contact = () => {
  return (
    <div className="container">
      <div className="notification">
        <h2 className="title is-3">Contact</h2>
      </div>
      <Input name="name" placeholder="Placeholder value" label="labeXl" />
    </div>
  );
};

export default Contact;
