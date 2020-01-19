// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { About } from "../About";

it("renders", () => {
  const props = {};
  const { container } = render(<About {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
