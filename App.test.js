import React from "react";
import App from "./App";

import renderer from "react-test-renderer";

it.skip("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
