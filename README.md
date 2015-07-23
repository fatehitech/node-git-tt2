# git-hours

git commit log parser and hours extractor

format: [2h]

Requirements:

Developers must use the correct hours format in their commit messages to accrue hours.

Procedure:

Everyone commits to any branch
Pull requests bring all accepted commits into master branch
Someone runs this module's binary to extract the commit logs over a date range
Master's commit logs are parsed to extract the hours logged per commit
Module outputs JSON file with users and commits and durations for each commit

Commits that do not parse correctly are ignored.
If developers forget to add hours or make a mistake, they can always do amendments and rebases -- it's just git for them.
