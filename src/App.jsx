import React, { Component } from 'react';


class App extends Component {
  state = {
    user: "",
    welcomeMessage: ""
  };

  onChangeHandler = e => {
    debugger
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmitHandler = e => {
    e.preventDefault();
    debugger
    this.setState({ welcomeMessage: `Hello ${this.state.user}, Let's play Rock Paper Scissors`})
  }
  render() {
    return (
      <div>
      <form>
       
        <input
        type="text"
        required
        placeholder="name"
        name="user"
        id="user"
        value={this.setState.user}
        onChange={this.onChangeHandler}
        />
      <button id="start" onClick={this.onSubmitHandler}>Start</button>
     
      <p id="welcome-message">{this.state.welcomeMessage}</p>
      </form>
      </div>
    );
  }
}

export default App;