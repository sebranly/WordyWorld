// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import { Emoji } from "../Emoji";

it("renders", () => {
  const props = { text: "pizza" };
  const rendered = renderer.create(<Emoji {...props} />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
