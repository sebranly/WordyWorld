// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Grid } from "../Grid";
import { mockWords } from "../../mocks";

it("renders", () => {
  const props = { word: mockWords[0] };

  const { container } = render(<Grid {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
