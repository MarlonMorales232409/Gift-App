import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../Components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGridItem from "../../Components/GifGridItem";
jest.mock("../../hooks/useFetchGifs");

describe("It shloud show it correctle", () => {
  let category = "vader";

  test("should show it correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show it correctly when data is coming from useFetch", () => {
    const gift = [
      {
        id: 123,
        url: "https://algo/algomas.jpg",
        title: "algo",
      },
      {
        id: 123,
        url: "https://algo/algomas.jpg",
        title: "algo",
      },
      {
        id: 123,
        url: "https://algo/algomas.jpg",
        title: "algo",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gift,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gift.length);
  });
});
