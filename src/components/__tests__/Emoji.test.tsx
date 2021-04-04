// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Emoji } from "../Emoji";

it("renders", () => {
  const props = { text: "pizza" };
  const { toJSON } = render(<Emoji {...props} />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
