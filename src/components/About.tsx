// Vendor
import * as React from "react";
import {
  Body,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Separator,
  Text,
  Thumbnail
} from "native-base";
import Constants from "expo-constants";
import get from "lodash/get";
import { Linking, StyleSheet } from "react-native";

export interface AboutProps {}

const About: React.FC<AboutProps> = _props => {
  // Setup
  const author = "sebranly";
  const authorAvatar = "https://avatars1.githubusercontent.com/u/25478895";
  const authorUrl = `https://github.com/${author}`;
  const currentYear = new Date(Date.now()).getFullYear();
  const version = get(Constants, "manifest.version", "unknown");

  const renderLibrary = (library: string) => {
    return (
      <ListItem key={library}>
        <Text>{library}</Text>
      </ListItem>
    );
  };

  const libraries = [
    "@testing-library/react-native",
    "emoji-from-text",
    "native-base",
    "node-emoji",
    "react-native",
    "react-native-easy-grid"
  ].map(v => renderLibrary(v));

  return (
    <Container>
      <Content>
        <List>
          <Separator bordered>
            <Text>Application</Text>
          </Separator>
          <ListItem>
            <Text>{`Created in 2018 - ${currentYear}`}</Text>
          </ListItem>
          <ListItem>
            <Text>{`Version ${version}`}</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              Linking.openURL(`${authorUrl}/WordyWorld`);
            }}
          >
            <Left style={styles.flex1}>
              <Icon name="ios-git-network" />
            </Left>
            <Text style={styles.flex4}>Project's GitHub</Text>
          </ListItem>
          <Separator bordered>
            <Text>Author</Text>
          </Separator>
          <ListItem
            onPress={() => {
              Linking.openURL(authorUrl);
            }}
          >
            <Left style={styles.flex1}>
              <Thumbnail source={{ uri: authorAvatar }} />
            </Left>
            <Body style={styles.flex4}>
              <Text>{author}</Text>
              <Text note>Developer/Tester</Text>
            </Body>
          </ListItem>

          <Separator bordered>
            <Text>Libraries used</Text>
          </Separator>
          {libraries}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flex4: {
    flex: 4
  }
});

export { About };
