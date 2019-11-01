import React from "react";
import { SectionListBasics } from "./SectionListBasics";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<SectionListBasics />).toJSON();
  expect(rendered).toBeTruthy();
});
