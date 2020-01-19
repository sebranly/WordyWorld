// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Footer } from "../Footer";
import { Screen } from "../../types/enum";

it("renders", () => {
  const props = { changeScreen: jest.fn(), screen: Screen.About };
  const rendered = renderer.create(<Footer {...props} />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
