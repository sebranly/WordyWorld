// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { SelectedLettersText } from "../SelectedLettersText";

it("renders", () => {
  const props = { text: "Test" };
  const { container } = render(<SelectedLettersText {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
