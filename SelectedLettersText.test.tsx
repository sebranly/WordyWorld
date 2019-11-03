import React from "react";
import { SelectedLettersText } from "./SelectedLettersText";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const props = {
    style: {},
    text: ""
  };

  const rendered = renderer.create(<SelectedLettersText {...props} />).toJSON();
  expect(rendered).toBeTruthy();
});
