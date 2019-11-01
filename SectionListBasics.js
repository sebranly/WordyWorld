import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import SelectedLettersText from './SelectedLettersText';
import { pluralize } from './helpers/stringHelper';

/*
  React-native does not support dynamic imports apparently
  See https://github.com/facebook/react-native/issues/2481#issuecomment-299074154
*/
const DATA = {
  letterCountIs2: require('./data/words/2-letters.json'),
  letterCountIs3: require('./data/words/3-letters.json')
}

export default class SectionListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {searchText: '', isSearch: false};
  }

  render() {
    const { letterCount } = this.props;
    const { isSearch, searchText } = this.state;

    const getXLetterWordsSections = (jsonObject) => {
      const allMixedUpWords = isSearch
        ? jsonObject.filter((wordObject) => wordObject.englishWord.toLowerCase().includes(searchText))
        : jsonObject;
      const allSortedWords = [];
      let currentGroupOfWords = [];
      let currentLetter = 97;

      allMixedUpWords.forEach((wordObject) => {
        const firstEnglishLetter = wordObject.englishWord[0].toLowerCase();
        if (firstEnglishLetter === String.fromCharCode(currentLetter)) {
          currentGroupOfWords.push(wordObject.englishWord);
        } else {
          if (currentGroupOfWords.length > 0) {
            allSortedWords.push(currentGroupOfWords);
          }
          currentGroupOfWords = [wordObject.englishWord];
          currentLetter = firstEnglishLetter.charCodeAt(0);
        }
      });
      if (currentGroupOfWords.length > 0) {
        allSortedWords.push(currentGroupOfWords);
      }

      return allSortedWords.map((groupOfWords) => {
        console.log(groupOfWords);
        const letterSection = groupOfWords[0][0].toUpperCase();
        return {
          title: `${letterSection} (${pluralize('word', groupOfWords.length)})`,
          data: groupOfWords
        }
      });
    };

    const jsonObject = DATA[`letterCountIs${letterCount}`];
    const xLetterWordsSections = getXLetterWordsSections(jsonObject);
    const occurrencesLetters = isSearch ? searchText : null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{`${letterCount}-letter words`}</Text>
        <TextInput
          placeholder="Search for a word..."
          onChangeText={
            (text) => {
              const trimmedText = text.trim();
              if (trimmedText.length > 0) {
                this.setState({searchText: trimmedText.toLowerCase(), isSearch: true});
              } else {
                this.setState({isSearch: false});
              }
            }
          }
          style={styles.searchBar}
        />
        {xLetterWordsSections.length ? (
          <SectionList
            sections={xLetterWordsSections}
            renderItem={
              ({item}) =>
                <SelectedLettersText
                  letters={occurrencesLetters}
                  style={styles.item}
                  text={item}
                />
            }
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        ): (
          <Text style={styles.noResult}>
            {`No word was found for your search.${
              isSearch && searchText.length > letterCount
                ? ` This view is for ${letterCount}-letter words only.`
                : ''
            }`}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  searchBar: {
    fontSize: 16,
    borderColor: 'black',
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 10
  },
  noResult: {
    paddingLeft: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center'
  },
  sectionHeader: {
    color: 'white',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'black',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
