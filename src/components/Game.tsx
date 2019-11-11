// Vendor
import * as React from "react";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Container } from "native-base";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";

export interface GameProps {
  style?: any;
}

const Game: React.FC<GameProps> = props => {
  const renderColAndRow = (stylesCol: any, stylesRow: any) => {
    return (
      <Col style={stylesCol}>
        <Row style={stylesRow}>
          <View style={styles.viewText}>
            <Text style={styles.text}>A</Text>
          </View>
        </Row>
        <Row style={stylesRow}>
          <View style={styles.viewText}>
            <Text style={styles.text}>A</Text>
          </View>
        </Row>
      </Col>
    );
  };

  return (
    <Container>
      <Text style={styles.title}>Game</Text>
      <Grid>
        {renderColAndRow(styles.col1, styles.row1)}
        {renderColAndRow(styles.col2, styles.row2)}
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  col1: {
    backgroundColor: "black"
  },
  col2: {
    backgroundColor: "grey"
  },
  grid: {
    borderColor: "red"
  },
  row1: {
    backgroundColor: "yellow"
  },
  row2: {
    backgroundColor: "purple"
  },
  row3: {
    backgroundColor: "blue"
  },
  row4: {
    backgroundColor: "brown"
  },
  text: {},
  title: {
    textAlign: "center"
  },
  viewText: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});

export { Game };
