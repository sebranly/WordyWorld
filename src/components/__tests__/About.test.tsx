// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { About } from "../About";

it("renders", () => {
  const props = {};
  const rendered = renderer.create(<About {...props} />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
