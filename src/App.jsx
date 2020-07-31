import React, { Component } from "react";
import Player from './Components/Player'

const weapons = ['rock', 'paper', 'scissors'];
class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  }

  render() {
    return (
     <>
     <h1>Rock Paper Scissors</h1>
     <button id='rock'>Rock</button>
     <button id='paper'>Paper</button>
     <button id='scissors'>Scissors</button>
     <div>
       <Player />
     </div>

     </> 
    )
  }
}


export default App;