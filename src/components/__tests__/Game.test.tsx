// Vendor
import React from "react";
import { render } from "@testing-library/react-native";

// Internal
import { Game } from "../Game";
import { Word } from "../../types/interfaces";

it("renders", () => {
  const words: Word[] = [
    { englishWord: "car", frenchWord: "voiture" },
    { englishWord: "cat", frenchWord: "chat" },
  ];

  const props = { words };

  const { container } = render(<Game {...props} />);
  expect(container.children.length).toBeGreaterThan(0);
  expect(container.children).toMatchSnapshot();
});
