import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCategory";

describe("The component should be show it correctly", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("It should show it corretly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should change the text box", () => {
    const input = wrapper.find("input");
    const value = "Hello World";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("It shouldn't posting the information in submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
