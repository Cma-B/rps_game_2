import React, { Component } from "react";

class App extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    result: "",
  };

  playGame = (e) => {
    const playerChoice = e.target.id;
    const computerChoice = this.getComputerChoice();
    const result = this.getWinner(playerChoice, computerChoice);
    this.setState
      ({
        playerChoice: playerChoice,
        computerChoice: computerChoice,
        result: result
      })
  }

  getComputerChoice = () => {
    const rand = Math.random();
    if (rand < 0.34) {
      return 'rock';
    } else if (rand <= 0.67) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };

  getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a draw";
    } else if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lost';
      } else {
        return 'You won!';
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lost';
      } else {
        return 'You won!';
      }
    } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lost';
      } else {
        return 'You won!';
      }
    }
  };

  render() {
    return (
      <>
        <h1 id="title">Let's play Rock Paper Scissors</h1>
        <p id="message">Make your choice</p>
        <div
          name="player-choice"
          id="player-choice"
          value="player-choice"
        >
          <i
            value="rock"
            onClick={this.playGame}
            id="rock"
            className="choice fa fa-hand-rock-o fa-5x"
          ></i>
          <i
            value="paper"
            onClick={this.playGame}
            id="paper"
            className="choice fa fa-hand-paper-o fa-5x"
          ></i>
          <i
            value="scissors"
            onClick={this.playGame}
            id="scissors"
            className="choice fa fa-hand-scissors-o fa-5x"
          ></i>
        </div>
        {this.state.playerChoice && (
          <div>
            <h3 id="p-choice">You'r choice: {this.state.playerChoice}</h3>
            <h3 id="computer">Computer choice: {this.state.computerChoice}</h3>
            <h2 id="result">{this.state.result}</h2>
          </div>
        )}
      </>
    );
  }
}

export default App;