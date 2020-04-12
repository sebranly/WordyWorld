// Vendor
import * as React from "react";
import random from "lodash/random";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Container } from "native-base";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

// Internal
import { findWordConnections } from "../helpers/strings";
import { Word } from "../types/interfaces";
import { WordConnection } from "../types/enum";
import { GAME_ROWS, IS_TEST } from "../config/settings";

export interface GameProps {
  allWords: Word[];
  style?: any;
}

const Game: React.FC<GameProps> = (props) => {
  // Setup
  const { allWords } = props;
  const wordIndex = IS_TEST ? 0 : random(allWords.length - 1);
  const initialWords = [allWords[wordIndex]];

  // Hooks
  const [words, _setWords] = React.useState(initialWords);

  // TODO: move out
  const findReplacements = (currentWord: Word) => {
    const replacements = allWords.filter((w) => {
      const connections = findWordConnections(
        currentWord.englishWord,
        w.englishWord
      );

      const replacementsConnections = connections.filter(
        (c) => c.type === WordConnection.Replacement
      );

      return replacementsConnections.length > 0;
    });

    return replacements;
  };

  const wordConnections = findReplacements(words[words.length - 1]);

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
      const word = words[words.length - 1];
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
        <Text>{`Words: ${allWords.length}`}</Text>
        <Text>{`Words[${wordIndex}]: ${JSON.stringify(
          allWords[wordIndex]
        )}`}</Text>
        <Text>{`Replacement words: ${wordConnections
          .map((w) => w.englishWord)
          .join(" ")}`}</Text>
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
