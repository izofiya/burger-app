import React from "react";
import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/original.png";

const logo = (props) => (
  <div className={classes.logo}>
    <img src={burgerLogo} alt="MyLogo" />
  </div>
);

export default logo;
