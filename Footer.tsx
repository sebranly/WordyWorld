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
  changeScreenAbout: () => void;
  changeScreenConfig: () => void;
  changeScreenExplore: () => void;
  screen: Screen;
}

const Footer: React.FC<FooterProps> = props => {
  // Setup
  const {
    changeScreenAbout,
    changeScreenConfig,
    changeScreenExplore,
    screen
  } = props;

  const isAbout = screen === Screen.About;
  const isConfig = screen === Screen.Config;
  const isExplore = screen === Screen.Explore;

  return (
    <FooterNativeBase>
      <FooterTab>
        <Button vertical active={isConfig} onPress={changeScreenConfig}>
          {!IS_TEST && <Icon name="ios-settings" />}
          <Text>Configuration</Text>
        </Button>
        <Button vertical active={isExplore} onPress={changeScreenExplore}>
          {!IS_TEST && <Icon name="md-globe" />}
          <Text>Explore</Text>
        </Button>
        <Button vertical active={isAbout} onPress={changeScreenAbout}>
          {!IS_TEST && <Icon name="ios-information-circle" />}
          <Text>About</Text>
        </Button>
      </FooterTab>
    </FooterNativeBase>
  );
};

export { Footer };
