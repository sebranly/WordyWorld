// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { SelectedLettersText } from "../SelectedLettersText";

it("renders", () => {
  const props = { text: "Test" };
  const { toJSON } = render(<SelectedLettersText {...props} />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
