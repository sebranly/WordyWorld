// Vendor
import * as Font from "expo-font";
import * as React from "react";
import { AppLoading } from "expo";
import { Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

// Internal
import { About } from "../src/components/About";
import { Footer } from "../src/components/Footer";
import { Game } from "../src/components/Game";
import { Results } from "../src/components/Results";
import { Screen } from "../src/types/enum";
import { HEADER_Y, IS_TEST } from "../src/config/settings";

export interface AppProps {}

const App: React.FC<AppProps> = _props => {
  // Hooks
  const [isReady, setIsReady] = React.useState(false);
  const [screen, setScreen] = React.useState(Screen.Game);

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

  // Setup
  const isAbout = screen === Screen.About;
  const isExplore = screen === Screen.Explore;
  const isGame = screen === Screen.Game;

  // Markup
  return (
    <Container style={styles.container}>
      {isAbout && <About />}
      {isExplore && <Results />}
      {isGame && <Game word={"splash"} />}
      <Footer changeScreen={changeScreen} screen={screen} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: HEADER_Y
  }
});

export default App;
