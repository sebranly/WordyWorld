// Mocks
jest.mock("expo-constants", () => ({ manifest: { version: "1.2.3" } }));

// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { About } from "../About";

it("renders", () => {
  const { container } = render(<About />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
