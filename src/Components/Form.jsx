import React from 'react'

const Form = props => {
  return (
    <form>
      <label htmlFor="name">Enter Your Name!</label>
      <input
        type="text"
        required
        placeholder="name"
        id="name"
        name="name"
        value={props.name}
        onChange={props.onChangeHandler}
      />
      <button id="play">Click Me!</button>
    </form>

  );
}

export default Form;