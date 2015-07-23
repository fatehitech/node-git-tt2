# git-tt2

git commit log parser and hours extractor

## Required Format

Developers must specify duration in commit messages in order to accrue hours.

Duration must be specified within brackets, like so: [<duration>]

To see what can be between the brackets, see: https://www.npmjs.com/package/duration-parser

Making multiple brackets or putting non-duration-parser input into the brackets are unhandled edge cases that will not be handled in this module.

Some examples of valid commit messages that will parse successfully:
  * "[2h5m] did stuff"
  * "here are things i did\n\n[.5h]"
  * "more things i did [25min]"

## Install

`npm install -g git-tt2`

## Usage Examples

`git tt2`

`git tt2 --since 07/23/2015`

`git tt2 --since 07/23/2015 --until 07/24/2015`

## Example Procedure

* Developers commits to any branch, ensuring to tag commits with time tracking data
* Merging commits from other branches into a time-tracked branch (e.g. master) qualifies good commits. Unmerged/abandoned commits, having not been value-adding, are justifiably not used.
* Someone/thing runs `git-tt2` to harvest time entries and generate appropriate invoices and/or payroll artifacts for master branch.

## Conflict Resolution

If developers forget to add hours or make a mistake, they can always do amendments and rebases, in other words, it's just git.
