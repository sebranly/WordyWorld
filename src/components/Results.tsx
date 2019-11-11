// Vendor
import * as React from "react";
import { SectionList, StyleSheet, Text, TextInput, View } from "react-native";

// Internal
import { Emoji } from "./Emoji";
import { getXLetterWordsSections } from "../helpers/index";
import { SelectedLettersText } from "./SelectedLettersText";

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

export interface ResultsProps {
  letterCount?: number;
}

const Results: React.FC<ResultsProps> = props => {
  // Hooks
  const [searchText, setSearchText] = React.useState("");
  const [isSearch, setIsSearch] = React.useState(false);

  const { letterCount } = props;

  const key = `letterCountIs${letterCount}`;
  const jsonObject = DATA[key];
  const xLetterWordsSections = getXLetterWordsSections(
    jsonObject,
    isSearch,
    searchText
  );

  const occurrencesLetters = isSearch ? searchText : undefined;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${letterCount}-letter words`}</Text>
      <TextInput
        placeholder="Search for a word..."
        onChangeText={text => {
          const trimmedText = text.trim();
          const hasLength = trimmedText.length > 0;

          if (hasLength) setSearchText(trimmedText.toLowerCase());
          setIsSearch(hasLength);
        }}
        style={styles.searchBar}
      />
      {xLetterWordsSections.length ? (
        <SectionList
          sections={xLetterWordsSections}
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
      ) : (
        <Text style={styles.noResult}>
          {`No word was found for your search.${
            isSearch && letterCount && searchText.length > letterCount
              ? ` This view is for ${letterCount}-letter words only.`
              : ""
          }`}
        </Text>
      )}
    </View>
  );
};

Results.defaultProps = {
  letterCount: 2
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emoji: {
    paddingTop: 4
  },
  inlineWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  searchBar: {
    fontSize: 16,
    borderColor: "black",
    textAlign: "left",
    paddingLeft: 10,
    paddingBottom: 10
  },
  noResult: {
    paddingLeft: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center"
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
  item: {
    fontSize: 18
  }
});

export { Results };
