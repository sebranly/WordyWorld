// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Emoji } from "../Emoji";

it("renders", () => {
  const props = { text: "pizza" };
  const { container } = render(<Emoji {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
