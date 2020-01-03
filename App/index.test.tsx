// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import App from "./index";

it("renders without crashing", () => {
  jest.useFakeTimers();
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).not.toBeNull();
});
