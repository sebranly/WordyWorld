// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Footer } from "./Footer";
import { Screen } from "./types/enum";

it("renders without crashing", () => {
  const props = { screen: Screen.About };
  const rendered = renderer.create(<Footer {...props} />).toJSON();
  expect(rendered).toBeTruthy();
});
