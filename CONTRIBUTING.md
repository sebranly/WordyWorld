# Contributing

## Users

Even if you don't develop apps, you can help me by reporting issues on [this link][link-issues].

## Developers

If you develop apps or have some skills in React/React Native/CSS/TypeScript/etc., you can help me by contributing to this project. Both new features and bug fixes are accepted.

### Setup

- `app.json` is not being tracked on purpose by git (added to `.gitignore`) as it may contain API keys. After cloning the repository, run `cp app.json.example app.json` from the root.

### Git workflow

- First, fork this repository so that you have a copy of it.
- Then, make sure to double-check `master` branch is in sync:
  - `git fetch origin`
  - `git checkout master`
  - `git pull origin master`
  - you should see the same commit on top as [this link][link-master]
- Create your own branch:
  - `git checkout -b fix-issue-abc`
- Work on your own branch by editing the code locally then saving it and pushing it to your branch:
  - `git add .`
  - `git commit -m MESSAGE` e.g. `git commit -m 'docs: update readme'`
    - Commit messages should be semantic thanks to this [rigid format][link-semantic-commit-messages]
  - `git push origin fix-issue-abc`
- Once the feature/bug fix looks correct, create a Pull-Request to merge your changes:
  - from your own branch from your fork of this repository
  - into `master` branch from the original repository
- Have a look at this [official documentation][link-fork-pull-request] in case you're missing one step
- I'll then have a look at the Pull-Request and merge it if everything looks good to me!

<!-- Links -->

[link-fork-pull-request]: https://help.github.com/en/github/getting-started-with-github/fork-a-repo "Fork Pull-Request Documentation"
[link-issues]: https://github.com/sebranly/WordyWorld/issues "GitHub Issues"
[link-master]: https://github.com/sebranly/WordyWorld/commits/master "GitHub master commits"
[link-semantic-commit-messages]: https://seesparkbox.com/foundry/semantic_commit_messages "Semantic Commit Messages"
