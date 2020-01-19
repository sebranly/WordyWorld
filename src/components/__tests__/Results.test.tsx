// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Results } from "../Results";

it("renders", () => {
  const rendered = renderer.create(<Results />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
