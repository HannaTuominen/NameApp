import React from 'react';
import classes from './Toolbar.css';
import {useHistory} from 'react-router-dom';
import Navigation from "./Navigation/Navigation";

const toolbar = (props) => {

  const history = useHistory();

  const getToHome = () => {
    history.push("/");
  };

  return (
  <header className={classes.Toolbar}>
   <div onClick={getToHome} className={classes.HomeLogo}>Hanna's name app</div>

    <nav>
      <Navigation/>
    </nav>

  </header>
  )};

export default toolbar;
