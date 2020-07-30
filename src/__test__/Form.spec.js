import React from 'react';
import { shallow } from 'enzyme';
import Form from "../Components/Form";

describe('Form', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const wrapper = shallow(
    <Form
      name="Sima"
      onChangeHandler={handleChange}
      onSubmitHandler={handleSubmit}
    />
  );
  it("renders with name prop", () => {
    expect(wrapper.find("#name").props().value).toEqual("Sima");
  });

  it("on change the onChangeHandler is being called", () => {
    wrapper.find("#name").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("on submit the onSubmitHandler is being called", () => {
    wrapper.find("form").simulate("submit");
    expect(handleSubmit).tohaveBeenCalled();
  });

})