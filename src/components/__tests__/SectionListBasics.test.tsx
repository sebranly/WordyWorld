// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { SectionListBasics } from "../SectionListBasics";

it("renders without crashing", () => {
  const rendered = renderer.create(<SectionListBasics />).toJSON();
  expect(rendered).toBeTruthy();
});
