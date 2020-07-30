import React from 'react'

const Form = props => {
    return (
        <form>
<label>Enter Your Name!</label>
<input
id="name"
name="name"
placeholder="Name"
/>
<button id="play">Start Gaming</button>
</form>

    );
}

export default Form;