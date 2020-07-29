import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <form>
        <label>Enter Your Name!</label>
        <input
        id="name"
        name="name"
        placeholder="Name"
        />
        <button id="play">Start Gaming</button>
      </form>
    );
  }
}

export default App;