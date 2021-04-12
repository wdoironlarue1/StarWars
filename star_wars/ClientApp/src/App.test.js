import React from "react";
import App from "./App";
import { shallow } from "enzyme";

it("calls the StarWars/Movies endpoint when mounted", () => {
  global.fetch = jest.fn();
  let wrapper = shallow(<App />, {disableLifecycleMethods: true});
  const spyDidMount = jest.spyOn(wrapper.instance(), "componentDidMount");

  fetch.mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => {
      },
    });
  });

  wrapper.instance().componentDidMount();

  expect(spyDidMount).toHaveBeenCalled();
  expect(fetch).toHaveBeenCalledWith("StarWars/Movies");

  wrapper.unmount();
});
