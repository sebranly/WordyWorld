// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Grid } from "../Grid";
import { mockWords } from "../../mocks";

it("renders", () => {
  const props = { word: mockWords[0] };

  const { toJSON } = render(<Grid {...props} />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
