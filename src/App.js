import React, { Component } from 'react';
import Header from './components/Header';
import OpenWidgetButton from './components/OpenWidgetButton';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <OpenWidgetButton />
      </div>
    );
  }
}

export default App;
