// Mocks
jest.mock("expo", () => ({}));
jest.mock("expo-app-loading", () => ({}));
jest.mock("@expo/vector-icons", () => ({}));

// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import App from "../index";

it("renders", async () => {
  const props = { initialReady: true };
  const { toJSON } = render(<App {...props} />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
