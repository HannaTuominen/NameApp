import React from 'react';
import classes from './Home.css';

const Home = props => (
  <div>
    <div className={classes.Home}>
      <h1>Welcome to the home of Hanna's Name App</h1>
      <h4>This site has been made with React frontend and it uses SpringBoot backend with a h2 database. <br/>
        The site has routing for the home screen and the names which displays a list of names that can be ordered and searched by name.
      </h4>
    </div>
  </div>
);

export default Home;
