import React from "react";
import MovieInfo from "../MovieInfo";
import { shallow } from "enzyme";

let wrapper;

afterEach(() => {
 wrapper.unmount();
})

it("shows the select text when no movie supplied", () => {
  wrapper = shallow(<MovieInfo />);
  expect(wrapper.find(".movie-info-container").text()).toEqual(
    expect.stringContaining(
      "Select a film on the left to view the crawl opening!"
    )
  );
});

it("alters the button text when isWookie is true", () => {
    wrapper = shallow(<MovieInfo />);
    expect(wrapper.find(".movie-info-container").text()).toEqual(
        expect.stringContaining(
          "translate page to Wookiee"
        )
      );

      wrapper.unmount();

      wrapper = shallow(<MovieInfo isWookiee/>);
      expect(wrapper.find(".movie-info-container").text()).toEqual(
        expect.stringContaining(
          "aorcrawhcanraaowo akrarrwo aooo wowhrranahcac"
        )
      );
})


