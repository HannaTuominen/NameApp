import React from 'react';

import classes from './Layout.css';
import Toolbar from "../Toolbar/Toolbar";
import Footer from "../Footer/Footer";

const layout = ( props ) => (
    <div className={classes.Container}>
      <Toolbar/>
      <main className={classes.Content}>
        {props.children}
      </main>
      <Footer/>
    </div>
);

export default layout;
