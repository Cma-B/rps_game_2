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
     <div>
       <Player />
     </div>
     <div>
     <button id='rock' className='weaponBtn'>Rock</button>
     <button id='paper' className='weaponBtn'>Paper</button>
     <button id='scissors' className='weaponBtn'>Scissors</button>
     </div>
     <div className="winner">Winner</div>

     <button id="start">Start</button>

     </> 
    )
  }
}


export default App;