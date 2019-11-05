// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { About } from "../About";

it("renders without crashing", () => {
  const props = {};
  const rendered = renderer.create(<About {...props} />).toJSON();
  expect(rendered).not.toBeNull();
});
