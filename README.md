# WordyWorld

:earth_americas: 2D mobile video game as a React Native app :iphone:

## Targeted Platforms

| Platform      | Supported | Notes                                                                                                                                                                                             |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS           | ✅        | Will be the first and only targeted platform at the beginning                                                                                                                                     |
| Android       | 🕒        | Will come once iOS version is good enough                                                                                                                                                         |
| Desktop Web   | 🕒        | Would be nice to have but I'd rather focus on mobile versions                                                                                                                                     |
| Windows Phone | ❌        | React Native's Documentation is mostly focused on Android and iOS, Windows Phone has been [discontinued](https://www.cnet.com/news/windows-10-mobile-features-hardware-death-sentence-microsoft/) |

## Development

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app) in August 2018.

#### Add new words

In order to add new pairs of english-french words, follow these steps:

- Edit the Google Spreadsheet (note: not public yet)
- Download it as `.csv`
- Execute `update_words.sh` script by running `./scripts/update_words.sh <digit>` from the root of the repository (replace `<digit>` with the number of letters e.g. if you want to generate the 2-letter words, run `./scripts/update_words.sh 2`)

## Documentation

### Internal Documentation

:book: This [gist](https://gist.github.com/rxaviers/7360908) displays a list of emoji that can be used on GitHub.

- Please don't use emoji in titles though, as they would be part of the URL otherwise.

### External Documentation

#### React Native: https://facebook.github.io/react-native/

**Note:** the latest documentation that has been read by `sebranly` is from version 0.56 as it was the most recent stable version (as of August 2018).

The following chapters haven't been read:

- Guides (iOS)
- Guides (Android)
- Contributing
- Components
- APIs

> Documentation is a really important part of any project. I want to keep track of what I read and more importantly when I read it (e.g. the documentation page about Performance changed so much that I should take a look at it again).

## To Do List

| Title                              | Description                                          |
| ---------------------------------- | ---------------------------------------------------- |
| Make the words' spreadsheet public | Do it after a while, once the project is good enough |
