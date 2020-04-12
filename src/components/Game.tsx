// Vendor
import * as React from "react";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Container } from "native-base";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

// Internal
import { findWordConnections } from "../helpers/strings";
import { getWordScore } from "../helpers/score";
import { Word } from "../types/interfaces";
import { WordConnection } from "../types/enum";
import { GAME_ROWS, SPECTATOR_INTERVAL } from "../config/settings";

export interface GameProps {
  allWords: Word[];
  initialWordIndex: number;
  style?: any;
}

const Game: React.FC<GameProps> = (props) => {
  // TODO: move out
  // words is the history of all played words. Last one is current one.
  const findReplacements = (words: Word[]) => {
    const word = words[words.length - 1];

    const bannedWords = words.map((w) => w.englishWord);
    const filteredWords = allWords.filter((w) => {
      return !bannedWords.includes(w.englishWord);
    });

    const replacements = filteredWords.filter((w) => {
      const connections = findWordConnections(word.englishWord, w.englishWord);

      const replacementsConnections = connections.filter(
        (c) => c.type === WordConnection.Replacement
      );

      return replacementsConnections.length > 0;
    });

    return replacements;
  };

  // Setup
  const { allWords, initialWordIndex } = props;
  const initialWords = [allWords[initialWordIndex]];

  // Hooks
  const [end, setEnd] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [words, setWords] = React.useState(initialWords);
  const [wordsConnections, setWordsConnections] = React.useState([] as Word[]);

  // Handlers
  const onSpectator = (initial = false) => {
    /**
     * @external https://stackoverflow.com/questions/53395147/use-react-hook-to-implement-a-self-increment-counter
     * Previous value of the hook state is needed as only first render knows it otherwise
     *
     * TODO: can the setState hooks be cleaned up?
     */
    setWords((words) => {
      const connections = findReplacements(words);

      if (initial) {
        setWordsConnections(connections);
        if (connections.length === 0) setEnd(true);
      } else {
        if (connections.length > 0) {
          const newWord = connections[0];
          const newWords = [...words, newWord];

          const newConnections = findReplacements(newWords);
          setWordsConnections(newConnections);

          const additionalScore = getWordScore(newWord);
          setScore((previousScore) => previousScore + additionalScore);

          if (newConnections.length === 0) setEnd(true);

          return newWords;
        } else {
          setEnd(true);
        }
      }

      return words;
    });
  };

  // Life-cycle
  React.useEffect(() => {
    onSpectator(true);
    const intervalId = setInterval(onSpectator, SPECTATOR_INTERVAL);

    return () => clearInterval(intervalId);
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
        <Text>{`History: ${words.map((w) => w.englishWord)}`}</Text>
        {!end && (
          <Text>{`Replacement words: ${wordsConnections
            .map((w) => w.englishWord)
            .join(" ")}`}</Text>
        )}
        {<Text>{`Score: ${score}`}</Text>}
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
