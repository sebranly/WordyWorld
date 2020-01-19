// Mocks
jest.mock("expo-constants", () => ({ expoVersion: "36" }));

// Vendor
import React from "react";
import renderer from "react-test-renderer";

// Internal
import App from "./index";

it("renders", () => {
  jest.useFakeTimers();
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).not.toBeNull();
  expect(rendered).toMatchSnapshot();
});
