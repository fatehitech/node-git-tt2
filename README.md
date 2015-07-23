# git-hours

git commit log parser and hours extractor

## Format

Duration must be specified in git commit like so: [<duration>]

To see what can be between the brackets, see: https://www.npmjs.com/package/duration-parser

Some examples:
  * 2h5m
  * .5h
  * 25min
  * 45m

## Requirements

Developers must use the correct hours format in their commit messages in order to accrue hours.

## Procedure

Everyone commits to any branch
Pull requests bring all accepted commits into master branch
Someone runs this module's binary to extract the commit logs over a date range
Master's commit logs are parsed to extract the hours logged per commit
Module outputs JSON file with users and commits and durations for each commit

Commits that do not parse correctly are ignored.
If developers forget to add hours or make a mistake, they can always do amendments and rebases, in other words, it's just git.
