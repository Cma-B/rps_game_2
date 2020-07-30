import React, { Component } from 'react';
import Form from "./Components/Form"

class App extends Component {
  state = {
  name: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })
  
  render() {

    return (
      <div>
        <Form
          name={this.state.name}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default App;