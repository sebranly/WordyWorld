// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Game } from "../Game";
import { mockWords } from "../../mocks";
import { Word } from "../../types/interfaces";

it("renders", () => {
  const props = { words: mockWords };

  const { container } = render(<Game {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
