// Vendor
import * as React from "react";
import {
  FooterTab,
  Footer as FooterNativeBase,
  Icon,
  Text,
  Button
} from "native-base";

// Internal
import { Screen } from "../types/enum";

export interface FooterProps {
  changeScreen: (screen: Screen) => void;
  screen: Screen;
}

const Footer: React.FC<FooterProps> = (props) => {
  // Setup
  const { changeScreen, screen } = props;

  const renderButton = (buttonScreen: Screen) => {
    const isActive = buttonScreen === screen;

    let iconName = "";
    let text = "";

    switch (buttonScreen) {
      case Screen.About:
        iconName = "ios-information-circle";
        text = "About";
        break;

      case Screen.Game:
        iconName = "ios-play-circle";
        text = "Play";
        break;

      case Screen.Explore:
      default:
        iconName = "md-globe";
        text = "Explore";
        break;
    }

    return (
      <Button
        key={buttonScreen}
        vertical
        active={isActive}
        onPress={() => changeScreen(buttonScreen)}
      >
        <Icon name={iconName} />
        <Text>{text}</Text>
      </Button>
    );
  };

  const buttons = [Screen.Explore, Screen.Game, Screen.About].map((v) =>
    renderButton(v)
  );

  return (
    <FooterNativeBase>
      <FooterTab>{buttons}</FooterTab>
    </FooterNativeBase>
  );
};

export { Footer };
