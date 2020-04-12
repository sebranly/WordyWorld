// Vendor
import * as React from "react";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Container } from "native-base";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

// Internal
import { findWordConnections } from "../helpers/strings";
import { Word } from "../types/interfaces";
import { WordConnection } from "../types/enum";
import { GAME_ROWS } from "../config/settings";

export interface GameProps {
  allWords: Word[];
  initialWordIndex: number;
  style?: any;
}

const Game: React.FC<GameProps> = (props) => {
  // Setup
  const { allWords, initialWordIndex } = props;
  const initialWords = [allWords[initialWordIndex]];
  const debug = `Initial word: ${initialWordIndex}: ${JSON.stringify(
    allWords[initialWordIndex]
  )}`;

  // Hooks
  const [end, setEnd] = React.useState(false);
  const [words, setWords] = React.useState(initialWords);
  const [wordsConnections, setWordsConnections] = React.useState([] as Word[]);

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

  // Handlers
  const onSpectator = (initial = false) => {
    const word = words[words.length - 1];
    const connections = findReplacements(word);

    if (connections.length > 0) {
      setWordsConnections(connections);
      if (!initial) setWords([...words, connections[0]]);
    } else {
      setEnd(true);
    }
  };

  // Life-cycle
  React.useEffect(() => {
    onSpectator(true);
    // const timer = setTimeout(() => {
    //   onSpectator();
    // }, 5000);
    // return () => clearTimeout(timer);
  }, []); // Empty array leads to same behavior as `componentDidMount` (if it was a class)

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
        <Text>{debug}</Text>
        {!end && (
          <Text>{`Replacement words: ${wordsConnections
            .map((w) => w.englishWord)
            .join(" ")}`}</Text>
        )}
        {end && <Text>Game Over</Text>}
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
