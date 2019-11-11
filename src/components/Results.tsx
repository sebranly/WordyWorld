// Vendor
import * as React from "react";
import { SectionList, StyleSheet, Text, TextInput, View } from "react-native";

// Internal
import { Emoji } from "./Emoji";
import { getResults, getResultsCount } from "../helpers/results";
import { SelectedLettersText } from "./SelectedLettersText";
import { ALL_WORDS, MIN_SEARCH_LETTER_COUNT } from "../config/settings";

export interface ResultsProps {}

const Results: React.FC<ResultsProps> = props => {
  // Hooks
  const [searchText, setSearchText] = React.useState("");
  const [isSearch, setIsSearch] = React.useState(false);

  const results = isSearch ? getResults(ALL_WORDS, searchText) : [];
  const occurrencesLetters = isSearch ? searchText : undefined;
  const totalResultsCount = getResultsCount(results);

  const areEmptyResults = results.length === 0;
  const emptyResultsText = isSearch
    ? "Your search has no results"
    : `Please type at least ${MIN_SEARCH_LETTER_COUNT} letters`;

  const placeholder = `Search for a word among ${ALL_WORDS.length} words...`;
  const titleSuffix = isSearch ? ` (${totalResultsCount})` : "";
  const title = `Results View${titleSuffix}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => {
          const trimmedText = text.trim();
          const hasLength = trimmedText.length >= MIN_SEARCH_LETTER_COUNT;

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
