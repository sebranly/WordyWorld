import * as React from "react";
import {
  FooterTab,
  Footer as FooterNativeBase,
  Icon,
  Text,
  Button
} from "native-base";

import { Screen } from "./types/enum";
import { IS_TEST } from "./config/settings";

export interface FooterProps {
  changeScreen: (screen: Screen) => void;
  screen: Screen;
}

const Footer: React.FC<FooterProps> = props => {
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

      case Screen.Config:
        iconName = "ios-settings";
        text = "Configuration";
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
        {!IS_TEST && <Icon name={iconName} />}
        <Text>{text}</Text>
      </Button>
    );
  };

  const buttons = [Screen.Config, Screen.Explore, Screen.About].map(v =>
    renderButton(v)
  );

  return (
    <FooterNativeBase>
      <FooterTab>{buttons}</FooterTab>
    </FooterNativeBase>
  );
};

export { Footer };
