// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { SelectedLettersText } from "../SelectedLettersText";

it("renders", () => {
  const props = { text: "" };
  const rendered = renderer.create(<SelectedLettersText {...props} />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
