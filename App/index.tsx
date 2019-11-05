// Vendor
import * as Font from "expo-font";
import * as React from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

// Internal
import { Footer } from "../Footer";
import { Screen } from "../types/enum";
import { SectionListBasics } from "../SectionListBasics";
import { IS_TEST } from "../config/settings";

export interface AppProps {}

const App: React.FC<AppProps> = _props => {
  // Hooks
  const [isReady, setIsReady] = React.useState(false);
  const [screen, setScreen] = React.useState(Screen.Explore);

  // Life-cycle
  React.useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      });

      setIsReady(true);
    };

    loadFonts();
  }, []); // Empty array leads to same behavior as `componentDidMount` (if it was a class)

  // Short-circuit
  if (!isReady && !IS_TEST) return <AppLoading />;

  // Handlers
  const changeScreen = (screen: Screen) => {
    setScreen(screen);
  };

  // Markup
  return (
    <Container style={styles.container}>
      <SectionListBasics letterCount={2} />
      <Footer changeScreen={changeScreen} screen={screen} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
