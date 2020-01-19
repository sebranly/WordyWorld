// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Game } from "../Game";

it("renders", () => {
  const props = { word: "test" };
  const rendered = renderer.create(<Game {...props} />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
