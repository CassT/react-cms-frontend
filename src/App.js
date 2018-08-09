import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import LinkStore from './stores/LinkStore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: LinkStore.getAll(),
    }
  }

  componentWillMount() {
    LinkStore.on("change", () => {
      this.setState({
        links: LinkStore.getAll(),
      });
    });
  }

  render() {
    return (
      <div>
        <Header links={this.state.links} />
        <Main links={this.state.links} />
      </div>
    );
  }
}

export default App;
