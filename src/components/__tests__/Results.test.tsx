// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Results } from "../Results";

it("renders", () => {
  const { container } = render(<Results />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
