// Vendor
import * as React from "react";
import flatten from "lodash/flatten";
import { SectionList, StyleSheet, Text, TextInput, View } from "react-native";

// Internal
import { Emoji } from "./Emoji";
import { getResults, getResultsCount } from "../helpers/results";
import { SelectedLettersText } from "./SelectedLettersText";
import { MIN_LETTER_COUNT, MAX_LETTER_COUNT } from "../config/settings";

/*
  TODO: fix if possible
  React-native does not support dynamic imports apparently
  See https://github.com/facebook/react-native/issues/2481#issuecomment-299074154
*/
const DATA: any = {
  letterCountIs2: require("../data/words/2-letters.json"),
  letterCountIs3: require("../data/words/3-letters.json"),
  letterCountIs4: require("../data/words/4-letters.json"),
  letterCountIs5: require("../data/words/5-letters.json"),
  letterCountIs6: require("../data/words/6-letters.json"),
  letterCountIs7: require("../data/words/7-letters.json"),
  letterCountIs8: require("../data/words/8-letters.json"),
  letterCountIs9: require("../data/words/9-letters.json"),
  letterCountIs10: require("../data/words/10-letters.json")
};

export interface ResultsProps {}

const Results: React.FC<ResultsProps> = props => {
  // Hooks
  const [searchText, setSearchText] = React.useState("");
  const [isSearch, setIsSearch] = React.useState(false);

  const allLetterCounts = Array.from(
    { length: MAX_LETTER_COUNT },
    (v, k) => k + 1
  ).filter(v => v >= MIN_LETTER_COUNT);

  const jsonObjectTemp = allLetterCounts.map(v => {
    const key = `letterCountIs${v}`;
    return DATA[key];
  });

  const jsonObject = flatten(jsonObjectTemp);
  const results = isSearch ? getResults(jsonObject, searchText) : [];
  const occurrencesLetters = isSearch ? searchText : undefined;
  const totalResultsCount = getResultsCount(results);

  const areEmptyResults = results.length === 0;
  const emptyResultsText = isSearch
    ? "Your search has no results"
    : "Please type at least 2 letters";

  const titleSuffix = !isSearch ? "" : ` (${totalResultsCount})`;
  const title = `Results View${titleSuffix}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder="Search for a word..."
        onChangeText={text => {
          const trimmedText = text.trim();
          const hasLength = trimmedText.length > 1;

          if (hasLength) setSearchText(trimmedText.toLowerCase());
          setIsSearch(hasLength);
        }}
        style={styles.searchBar}
      />
      {areEmptyResults ? (
        <Text style={styles.emptyResults}>{emptyResultsText}</Text>
      ) : (
        <SectionList
          sections={results}
          renderItem={({ item }) => {
            return (
              <View style={styles.inlineWrapper}>
                <Emoji style={styles.emoji} text={item} />
                <SelectedLettersText
                  letters={occurrencesLetters}
                  style={styles.item}
                  text={item}
                />
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(_item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emoji: {
    paddingTop: 4
  },
  emptyResults: {
    paddingLeft: 10
  },
  inlineWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  item: {
    fontSize: 18
  },
  noResult: {
    paddingLeft: 10
  },
  searchBar: {
    fontSize: 16,
    borderColor: "black",
    textAlign: "left",
    paddingLeft: 10,
    paddingBottom: 10
  },
  sectionHeader: {
    color: "white",
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "black"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center"
  }
});

export { Results };
