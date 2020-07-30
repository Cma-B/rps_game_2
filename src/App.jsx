import React, { Component } from 'react';
import Form from "./Components/Form"
import {clickMe} from "./helpers/welcomeHelper";

class App extends Component {
  state = {
  name: "",
  welcomeMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })
  
  onSubmitHandler = e => {
    e.preventDefault();
    const [welcomeMessage] = clickMe(
      this.state.name
    );
    this.setState({ welcomeMessage: welcomeMessage})
  };
  
  render() {

    return (
      <div>
        <Form
          name={this.state.name}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default App;