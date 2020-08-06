import React from "react";

const Form = props => {
  return (
    <div>
    <form onSubmit={props.onSubmitHandler}>
    <input
      type="text"
      required
      placeholder="name"
      name="user"
      id="user"
      value={props.user}
      onChange={props.onChangeHandler}
    />
    <button id="start">Start</button>
  </form>
  </div>
  )
}
export default Form;