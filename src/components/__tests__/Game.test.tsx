// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Game } from "../Game";
import { mockWords } from "../../mocks";

it("renders", () => {
  jest.useFakeTimers();
  const props = { allWords: mockWords, initialWordIndex: 0 };

  const { container } = render(<Game {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
