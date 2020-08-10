import React, { Component } from 'react';

class App extends Component {
  state = {
  playerChoice: "",
  computerChoice: ""
  };

onChangeHandler = e => {
  this.setState ({playerChoice: e.target.id})
}
onComputerChoiceHandler = () => {
  const rand = Math.random()
    if (rand < 0.34) {
      this.setState ({ computerChoice: "Rock"})
     } else if (rand <= 0.67) {
       this.setState ({ computerChoice: "Paper"})
     } else {
       this.setState ({ computerChoice: "Scissors"})
     }
}
  render() {
    return (
      <>
<p>Make your Choice</p>
<div  name="playerChoice" id="playerChoice" value="playerChoice" onClick={this.onComputerChoiceHandler}>
           <i value="rock" onClick={this.onChangeHandler}
           id="rock" className="choice fa fa-hand-rock-o fa-5x"></i>
          <i value="paper" onClick={this.onChangeHandler}
          id="paper" className="choice fa fa-hand-paper-o fa-5x"></i>
          <i value="scissors" onClick={this.onChangeHandler}
           id="scissors" className="choice fa fa-hand-scissors-o fa-5x"></i>
           {this.state.plyerChoice}
</div>
{this.state.playerChoice && (
  <div>
  <h3>You Chose {this.state.playerChoice}</h3>
  <h3>Computer Chose {this.state.computerChoice}</h3>
  </div>
)}
 

  
  
      </>
    );
  }
}

export default App;