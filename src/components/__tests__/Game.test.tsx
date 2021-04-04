// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Game } from "../Game";
import { mockWords } from "../../mocks";

it("renders", () => {
  const props = { allWords: mockWords, initialWordIndex: 0 };

  const { toJSON } = render(<Game {...props} />);
  expect(toJSON()).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
