import React, { Component } from 'react';
import Form from "./Components/Form";
import Icons from "./Components/Icons";

class App extends Component {
  state = {
    user: "",
    welcomeMessage: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ welcomeMessage: `Hello ${this.state.user}, Let's play Rock Paper Scissors` })
  };
  


  render() {
    return (
      <div>
        <Form
          user={this.state.user}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        <p id="welcome-message">
          {this.state.welcomeMessage}
        </p>
        {this.state.welcomeMessage && (
         <Icons/>
        )}
     
      </div>
    );
  }
}

export default App;