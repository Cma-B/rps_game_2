import React from 'react'

const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
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