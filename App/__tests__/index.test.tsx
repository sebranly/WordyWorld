// Mocks
jest.mock("expo", () => ({ AppLoading: "AppLoading" }));
jest.mock("@expo/vector-icons", () => ({}));

// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import App from "../index";

it("renders", () => {
  const props = { initialReady: true };
  const { container } = render(<App {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
