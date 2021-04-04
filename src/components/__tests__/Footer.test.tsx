// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Footer } from "../Footer";
import { Screen } from "../../types/enum";

it("renders", () => {
  const props = { changeScreen: jest.fn(), screen: Screen.About };
  const { toJSON } = render(<Footer {...props} />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
