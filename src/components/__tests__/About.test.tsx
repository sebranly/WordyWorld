// Mocks
jest.mock("expo-constants", () => ({ manifest: { version: "1.2.3" } }));

// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { About } from "../About";

it("renders", () => {
  const { toJSON } = render(<About />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
