// Vendor
import * as React from "react";
import { Col, Grid as EasyGrid, Row } from "react-native-easy-grid";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

// Internal
import { Word } from "../types/interfaces";
import { GAME_ROWS } from "../config/settings";

export interface GridProps {
  word: Word;
}

const Grid: React.FC<GridProps> = (props) => {
  const { word } = props;

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
      const letters = word.en.split("");

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

  return <EasyGrid style={styles.grid}>{renderRows()}</EasyGrid>;
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "grey",
    margin: 2,
  },
  grid: {
    flex: 3,
  },
  text: { fontSize: 30 },
  viewText: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export { Grid };
