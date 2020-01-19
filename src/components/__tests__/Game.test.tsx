// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Game } from "../Game";

it("renders", () => {
  const props = { word: "test" };
  const { container } = render(<Game {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
