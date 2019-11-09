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

**Note:** the latest documentation that has been read by `sebranly` is from version 0.56 as it was the most recent stable version (as of August 2018): the prefix for the URL is always `https://facebook.github.io/react-native/docs/0.56/` (e.g. https://facebook.github.io/react-native/docs/0.56/getting-started.html is the starting point)

| Part             | Chapter                                                                                                            | Date `sebranly` read it for the last time |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| The Basics       |
|                  | [Getting Started](https://facebook.github.io/react-native/docs/0.56/getting-started)                               | August 2018                               |
|                  | [Learn the Basics](https://facebook.github.io/react-native/docs/0.56/tutorial)                                     | August 2018                               |
|                  | [Props](https://facebook.github.io/react-native/docs/0.56/props)                                                   | August 2018                               |
|                  | [State](https://facebook.github.io/react-native/docs/0.56/state)                                                   | August 2018                               |
|                  | [Style](https://facebook.github.io/react-native/docs/0.56/style)                                                   | August 2018                               |
|                  | [Height and Width](https://facebook.github.io/react-native/docs/0.56/height-and-width)                             | August 2018                               |
|                  | [Layout with Flexbox](https://facebook.github.io/react-native/docs/0.56/flexbox)                                   | August 2018                               |
|                  | [Handling Text Input](https://facebook.github.io/react-native/docs/0.56/handling-text-input)                       | August 2018                               |
|                  | [Handling Touches](https://facebook.github.io/react-native/docs/0.56/handling-touches)                             | August 2018                               |
|                  | [Using a ScrollView](https://facebook.github.io/react-native/docs/0.56/using-a-scrollview)                         | August 2018                               |
|                  | [Using List Views](https://facebook.github.io/react-native/docs/0.56/using-a-listview)                             | August 2018                               |
|                  | [Networking](https://facebook.github.io/react-native/docs/0.56/network)                                            | August 2018                               |
|                  | [More Resources](https://facebook.github.io/react-native/docs/0.56/more-resources)                                 | August 2018                               |
| Guides           |
|                  | [Components and APIs](https://facebook.github.io/react-native/docs/0.56/components-and-apis)                       | August 2018                               |
|                  | [Platform Specific Code](https://facebook.github.io/react-native/docs/0.56/platform-specific-code)                 | August 2018                               |
|                  | [Navigating Between Screens](https://facebook.github.io/react-native/docs/0.56/navigation)                         | August 2018                               |
|                  | [Images](https://facebook.github.io/react-native/docs/0.56/images)                                                 | August 2018                               |
|                  | [Animations](https://facebook.github.io/react-native/docs/0.56/animations)                                         | August 2018                               |
|                  | [Accessibility](https://facebook.github.io/react-native/docs/0.56/accessibility)                                   | August 2018                               |
|                  | [Improving User Experience](https://facebook.github.io/react-native/docs/0.56/improvingux)                         | August 2018                               |
|                  | [Timers](https://facebook.github.io/react-native/docs/0.56/timers)                                                 | August 2018                               |
|                  | [Debugging](https://facebook.github.io/react-native/docs/0.56/debugging)                                           | August 2018                               |
|                  | [Performance](https://facebook.github.io/react-native/docs/0.56/performance)                                       | August 2018                               |
|                  | [Gesture Responder System](https://facebook.github.io/react-native/docs/0.56/gesture-responder-system)             | August 2018                               |
|                  | [JavaScript Environment](https://facebook.github.io/react-native/docs/0.56/javascript-environment)                 | August 2018                               |
|                  | [Direct Manipulation](https://facebook.github.io/react-native/docs/0.56/direct-manipulation)                       | August 2018                               |
|                  | [Color Reference](https://facebook.github.io/react-native/docs/0.56/colors)                                        | August 2018                               |
|                  | [Integration with Existing Apps](https://facebook.github.io/react-native/docs/0.56/integration-with-existing-apps) | August 2018                               |
|                  | [Building For Apple TV](https://facebook.github.io/react-native/docs/0.56/building-for-apple-tv)                   | August 2018                               |
|                  | [Running On Device](https://facebook.github.io/react-native/docs/0.56/running-on-device)                           | August 2018                               |
|                  | [Upgrading to new React Native versions](https://facebook.github.io/react-native/docs/0.56/upgrading)              | August 2018                               |
|                  | [Troubleshooting](https://facebook.github.io/react-native/docs/0.56/troubleshooting)                               | August 2018                               |
|                  | [Native Modules Setup](https://facebook.github.io/react-native/docs/0.56/native-modules-setup)                     | August 2018                               |
| Guides (iOS)     |
|                  | ...                                                                                                                | Not read yet                              |
| Guides (Android) |
|                  | ...                                                                                                                | Not read yet                              |
| Contributing     |
|                  | ...                                                                                                                | Not read yet                              |
| Components       |
|                  | ...                                                                                                                | Not read yet                              |
| APIs             |
|                  | ...                                                                                                                | Not read yet                              |

:question: Why is there such a table here?

> Documentation is a really important part of any project. Thanks to this table I can keep track of what I read and more importantly when I read it. Also, it's publicly available so that people can let me know if I missed an update that includes drastic changes (e.g. the documentation page about Performance changed so much that I should take a look at it again).

## To Do List

| Title                              | Description                                          |
| ---------------------------------- | ---------------------------------------------------- |
| Make the words' spreadsheet public | Do it after a while, once the project is good enough |
