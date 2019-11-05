import * as React from "react";
import {
  FooterTab,
  Footer as FooterNativeBase,
  Icon,
  Text,
  Button
} from "native-base";

import { Screen } from "./types/enum";

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
          <Icon name="ios-settings" />
          <Text>Config</Text>
        </Button>
        <Button vertical active={isExplore}>
          <Icon name="md-globe" />
          <Text>Explore</Text>
        </Button>
        <Button vertical active={isAbout}>
          <Icon name="ios-information-circle" />
          <Text>About</Text>
        </Button>
      </FooterTab>
    </FooterNativeBase>
  );
};

export { Footer };
