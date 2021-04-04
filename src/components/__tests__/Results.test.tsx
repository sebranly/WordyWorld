// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Results } from "../Results";

it("renders", () => {
  const { toJSON } = render(<Results />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
