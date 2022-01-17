import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../Components/GifGridItem";

const title = "Testing";
const url = "https://localhost/img/1";

let wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("testing in GiftGridItem Component", () => {
  test("Must to show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("it must to have P with the title", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("img must to have an src attribute inside", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Div elemment should have the class name animate__fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.hasClass("animate__fadeIn")).toBe(true);
  });
});
