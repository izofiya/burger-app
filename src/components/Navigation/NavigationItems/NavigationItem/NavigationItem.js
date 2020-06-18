import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.navigationItem}>
    <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
