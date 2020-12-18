import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import NamesContainer from "./containers/NamesContainer/NamesContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <NamesContainer/>
        </Layout>
      </div>
    );
  }
}

export default App;
