import React from 'react';
import  classes from './Navigation.css';
import {NavLink} from "react-router-dom";

const navigation = (props) => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink
        to="/names"
        exact={props.exact}
        activeClassName={classes.active}>
        Names
      </NavLink>
    </li>
  </ul>
);

export default navigation;
