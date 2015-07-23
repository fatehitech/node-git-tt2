var sh = require('shelljs');
var parseDuration = require('duration-parser');
var moment = require('moment');
var gh = module.exports = {};

var brackets = /\[(.+)\]/;

gh.exec = function(opts, cb) {
  var args = [];
  if (opts.since) {
    args.push('--since');
    args.push('"'+moment(new Date(opts.since)).format()+'"');
  }
  if (opts.until) {
    args.push('--until');
    args.push('"'+moment(new Date(opts.until)).format()+'"');
  }
  var gitCmd = 'git log '+args.join(' ');
  sh.exec(gitCmd, { silent: true }, function(code, data) {
    if (code !== 0) cb(new Error('git exited non-zero'));
    var items = [];
    data.split(/commit/g).forEach(function(commit) {
      var matchHours = commit.match(brackets);
      if (matchHours) {
        var item = {}
        item.input = matchHours[1];
        item.duration = parseDuration(matchHours[1]);
        commitParts = commit.trim().split('\n');
        item.sha = commitParts[0];
        item.author = commitParts[1].match(/Author:\s+(.+)/)[1];
        var msg = commitParts.slice(3, commitParts.length);
        item.message = msg.join('\n').replace(brackets, '').trim();
        item.date = new Date(commitParts[2].match(/Date:\s+(.+)/)[1]);
        items.push(item);
      }
    });
    cb(null, items);
  })
}
