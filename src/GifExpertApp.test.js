import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "./GifExpertApp";

describe("Should mathc with the component <GifExpertApp/>", () => {
  test("should mathc with the component <GifExpertApp/>", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match the snapshopt if exist categories", () => {
    const categories = ["retsuko", "vader"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
