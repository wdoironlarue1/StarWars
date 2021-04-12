import React from "react";
import SideBar from "../SideBar";
import { shallow } from "enzyme";

it("calls setSelected with the right episode id when a film is clicked on", () => {
  let mockSetSelected = jest.fn((id) => {});
  const testOptions = [{ episodeId: 3, title: "test title" }];
  let wrapper = shallow(
    <SideBar options={testOptions} setSelected={mockSetSelected} />
  );
  let option = wrapper.find(".sidebar-option");
  option.simulate("click");
  expect(mockSetSelected).toHaveBeenCalledWith(3);
});
