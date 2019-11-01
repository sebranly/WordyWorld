import React from "react";
import SectionListBasics from "./App";

import renderer from "react-test-renderer";

it.skip("renders without crashing", () => {
  const rendered = renderer.create(<SectionListBasics />).toJSON();
  expect(rendered).toBeTruthy();
});
