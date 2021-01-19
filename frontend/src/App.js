import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import NamesContainer from "./containers/NamesContainer/NamesContainer";
import Home from "./components/Home/Home";
import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/names" component={NamesContainer}/>
            <Route path="/" component={Home} exact/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
