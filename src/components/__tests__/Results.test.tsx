// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Results } from "../Results";

it("renders without crashing", () => {
  const rendered = renderer.create(<Results />).toJSON();
  expect(rendered).not.toBeNull();
});
