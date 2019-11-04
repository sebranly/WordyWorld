# WordyWorld
:earth_americas: 2D mobile video game as a React Native app :iphone:

## Targeted Platforms

|Platform|Supported|Notes|
|-|-|-|
|iOS|:white_check_mark:|Will be the first and only targeted platform at the beginning|
|Android|:white_check_mark:|Will come once iOS version is good enough|
|Desktop Web|:white_check_mark:|Would be nice to have but I'd rather focus on mobile versions|
|Windows Phone|:x:|React Native's Documentation is mostly focused on Android and iOS, Windows Phone has been [discontinued](https://www.cnet.com/news/windows-10-mobile-features-hardware-death-sentence-microsoft/)|

## Development

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

### Git workflow

In order to add a new feature/bug fix, follow these steps:

- Get the latest updates

```
git fetch origin
git checkout master
git pull origin master
```

- Create your own branch

```
git checkout -b your-branch-name
```

- Work, work, work on it by editing the code locally then pushing it to your branch
- Once the feature/bug fix looks correct, create a Pull Request to merge your commits into `master` from `your-branch-name`

#### Branches

Branches should have a clear name, be short and only use `a-z` and `-`.

#### Commits

:cop: Commit messages should be semantic thanks to this [rigid format](https://seesparkbox.com/foundry/semantic_commit_messages), i.e. they should start with one of these values:
`['chore:', 'docs:', 'feat:', 'fix:', 'refactor:', 'style:', 'test:']`

The next part should be an action, starting with a verb in present tense.
Complete example: `docs: update readme`

#### Dependencies

When adding dependencies to this project by running `npm install` please make sure to include `--save-dev` option if applicable (`--save` does not exist anymore as it's done by default according to the [documentation](https://docs.npmjs.com/cli/install#description) now). Make sure to commit `package-lock.json` file as well, [it's expected](https://docs.npmjs.com/files/package-lock.json#description).

#### Add new words

In order to add new couples of english-french words, follow these steps:

- Edit the Google Spreadsheet (note: not public yet)
- Download it as `.csv`
- Execute `update_words.sh` script by going into `/scripts` folder and running `./update_words.sh`

## Documentation

### Internal Documentation

:book: This [gist](https://gist.github.com/rxaviers/7360908) displays a list of emoji that can be used on GitHub.
- Please don't use emoji in titles though, as they would be part of the URL otherwise.

### External Documentation

#### React Native: https://facebook.github.io/react-native/

**Note:** the latest documentation that has been read by `sebranly` is from version 0.56 as it was the most recent stable version (as of August 2018): the prefix for the URL is always `https://facebook.github.io/react-native/docs/0.56/` (e.g. https://facebook.github.io/react-native/docs/0.56/getting-started.html is the starting point)

|Part|Chapter|Date `sebranly` read it for the last time|
|-|-|-|
|The Basics|
||[Getting Started](https://facebook.github.io/react-native/docs/0.56/getting-started)|August 2018|
||[Learn the Basics](https://facebook.github.io/react-native/docs/0.56/tutorial)|August 2018|
||[Props](https://facebook.github.io/react-native/docs/0.56/props)|August 2018|
||[State](https://facebook.github.io/react-native/docs/0.56/state)|August 2018|
||[Style](https://facebook.github.io/react-native/docs/0.56/style)|August 2018|
||[Height and Width](https://facebook.github.io/react-native/docs/0.56/height-and-width)|August 2018|
||[Layout with Flexbox](https://facebook.github.io/react-native/docs/0.56/flexbox)|August 2018|
||[Handling Text Input](https://facebook.github.io/react-native/docs/0.56/handling-text-input)|August 2018|
||[Handling Touches](https://facebook.github.io/react-native/docs/0.56/handling-touches)|August 2018|
||[Using a ScrollView](https://facebook.github.io/react-native/docs/0.56/using-a-scrollview)|August 2018|
||[Using List Views](https://facebook.github.io/react-native/docs/0.56/using-a-listview)|August 2018|
||[Networking](https://facebook.github.io/react-native/docs/0.56/network)|August 2018|
||[More Resources](https://facebook.github.io/react-native/docs/0.56/more-resources)|August 2018|
|Guides|
||[Components and APIs](https://facebook.github.io/react-native/docs/0.56/components-and-apis)|August 2018|
||[Platform Specific Code](https://facebook.github.io/react-native/docs/0.56/platform-specific-code)|August 2018|
||[Navigating Between Screens](https://facebook.github.io/react-native/docs/0.56/navigation)|August 2018|
||[Images](https://facebook.github.io/react-native/docs/0.56/images)|August 2018|
||[Animations](https://facebook.github.io/react-native/docs/0.56/animations)|August 2018|
||[Accessibility](https://facebook.github.io/react-native/docs/0.56/accessibility)|August 2018|
||[Improving User Experience](https://facebook.github.io/react-native/docs/0.56/improvingux)|August 2018|
||[Timers](https://facebook.github.io/react-native/docs/0.56/timers)|August 2018|
||[Debugging](https://facebook.github.io/react-native/docs/0.56/debugging)|August 2018|
||[Performance](https://facebook.github.io/react-native/docs/0.56/performance)|August 2018|
||[Gesture Responder System](https://facebook.github.io/react-native/docs/0.56/gesture-responder-system)|August 2018|
||[JavaScript Environment](https://facebook.github.io/react-native/docs/0.56/javascript-environment)|August 2018|
||[Direct Manipulation](https://facebook.github.io/react-native/docs/0.56/direct-manipulation)|August 2018|
||[Color Reference](https://facebook.github.io/react-native/docs/0.56/colors)|August 2018|
||[Integration with Existing Apps](https://facebook.github.io/react-native/docs/0.56/integration-with-existing-apps)|August 2018|
||[Building For Apple TV](https://facebook.github.io/react-native/docs/0.56/building-for-apple-tv)|August 2018|
||[Running On Device](https://facebook.github.io/react-native/docs/0.56/running-on-device)|August 2018|
||[Upgrading to new React Native versions](https://facebook.github.io/react-native/docs/0.56/upgrading)|August 2018|
||[Troubleshooting](https://facebook.github.io/react-native/docs/0.56/troubleshooting)|August 2018|
||[Native Modules Setup](https://facebook.github.io/react-native/docs/0.56/native-modules-setup)|August 2018|
|Guides (iOS)|
||...|Not read yet|
|Guides (Android)|
||...|Not read yet|
|Contributing|
||...|Not read yet|
|Components|
||...|Not read yet|
|APIs|
||...|Not read yet|

:question: Why is there such a table here?
> Documentation is a really important part of any project. Thanks to this table I can keep track of what I read and more importantly when I read it. Also, it's publicly available so that people can let me know if I missed an update that includes drastic changes (e.g. the documentation page about Performance changed so much that I should take a look at it again).

## To Do List

|Title|Description|
|-|-|
|Make the words' spreadsheet public|Do it after a while, once the project is good enough|