import React, { Component } from 'react';
import Form from "./Components/Form";
import Choices from "./Components/Choices";
import { playGame } from "./helpers/rpsHelper";


class App extends Component {
  state = {
    user: "",
    welcomeMessage: "",
    playerChoice: "",
    computerChoice: "",
    winner: ""
  };

  onChangeHandler = e => {
    this.setState({ user: e.target.value })
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ welcomeMessage: `Hello ${this.state.user}, Let's play Rock Paper Scissors` })
  };


  onClickHandler = e => {
  
    this.setState({ playerChoice: e.target.value })
  }



  


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
          <Choices
            playerChoice={this.state.playerChoice}
            onClickHandler={this.onClickHandler}
          />
        )}
      </div>
    );
  }
}

export default App;