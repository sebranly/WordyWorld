// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Footer } from "../Footer";
import { Screen } from "../../types/enum";

it("renders", () => {
  const props = { changeScreen: jest.fn(), screen: Screen.About };
  const { container } = render(<Footer {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
