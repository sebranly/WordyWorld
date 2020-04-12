// Vendor
import * as React from "react";
import random from "lodash/random";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Container } from "native-base";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

// Internal
import { Word } from "../types/interfaces";
import { GAME_ROWS, IS_TEST } from "../config/settings";

export interface GameProps {
  style?: any;
  words: Word[];
}

const Game: React.FC<GameProps> = (props) => {
  // Setup
  const { words } = props;
  const wordIndex = IS_TEST ? 0 : random(words.length - 1);
  const initialWord = words[wordIndex];

  // Hooks
  const [word, _setWord] = React.useState(initialWord);

  const renderRow = (indexRow: number, last?: boolean) => {
    const renderColumn = (letter: string, indexCol: number) => {
      const innerComponent = last ? (
        <View style={styles.viewText}>
          <Text style={styles.text}>{letter}</Text>
        </View>
      ) : null;

      return (
        <Col key={`col-${indexCol}`} style={styles.cell}>
          {innerComponent}
        </Col>
      );
    };

    const renderColumns = () => {
      const letters = word.englishWord.split("");
      const columns = letters.map((v, i) => renderColumn(v, i));
      return columns;
    };

    return <Row key={`row-${indexRow}`}>{renderColumns()}</Row>;
  };

  const renderRows = () => {
    const lastIndexRow = GAME_ROWS - 1;
    const allButLastRow = Array.from({ length: lastIndexRow }, (_v, i) =>
      renderRow(i)
    );

    return [...allButLastRow, renderRow(lastIndexRow, true)];
  };

  return (
    <Container>
      <Text style={styles.title}>Game</Text>
      <Grid style={styles.grid}>{renderRows()}</Grid>
      <View style={styles.example}>
        <Text>{`Words: ${words.length}`}</Text>
        <Text>{`Words[${wordIndex}]: ${JSON.stringify(
          words[wordIndex]
        )}`}</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "grey",
    margin: 2,
  },
  example: {
    backgroundColor: "yellow",
    flex: 1,
  },
  grid: {
    flex: 3,
  },
  text: { fontSize: 30 },
  title: {
    textAlign: "center",
  },
  viewText: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export { Game };
