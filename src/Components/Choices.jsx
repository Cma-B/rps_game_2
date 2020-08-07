import React from "react";
import '../index.css';


const Choices = props => {
  return (
      <>
      <h2>Make Your Selection</h2>
      <div id="choices" className="choices" name="playerChoice" value={props.playerChoice} onClick={props.onClickHandler}>
          <i value="rock" 
           id="rock" className="choice fa fa-hand-rock-o fa-5x"></i>
          <i value="paper" 
          id="paper" className="choice fa fa-hand-paper-o fa-5x"></i>
          <i value="scissors" 
           id="scissors" className="choice fa fa-hand-scissors-o fa-5x"></i>
      </div>

    </>
  )  
} 

export default Choices;