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
  screen: Screen;
}

const Footer: React.FC<FooterProps> = props => {
  // Setup
  const { screen } = props;
  const isAbout = screen === Screen.About;
  const isConfig = screen === Screen.Config;
  const isExplore = screen === Screen.Explore;

  // TODO: add `onPress` on `Button`
  return (
    <FooterNativeBase>
      <FooterTab>
        <Button vertical active={isConfig}>
          {!IS_TEST && <Icon name="ios-settings" />}
          <Text>Configuration</Text>
        </Button>
        <Button vertical active={isExplore}>
          {!IS_TEST && <Icon name="md-globe" />}
          <Text>Explore</Text>
        </Button>
        <Button vertical active={isAbout}>
          {!IS_TEST && <Icon name="ios-information-circle" />}
          <Text>About</Text>
        </Button>
      </FooterTab>
    </FooterNativeBase>
  );
};

export { Footer };
