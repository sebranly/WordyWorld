// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Game } from "../Game";

it("renders without crashing", () => {
  const props = { word: "test" };
  const rendered = renderer.create(<Game {...props} />).toJSON();
  expect(rendered).not.toBeNull();
});
