var sh = require('shelljs');
var gh = module.exports = {};

var hoursPattern = /\[(((\d+)[h|m])+)\]/;

var parseDuration = function(stamp) {
  return stamp;
}

gh.exec = function(options, cb) {
  var gitCmd = 'git log';
  sh.exec(gitCmd, { silent: true }, function(code, data) {
    if (code !== 0) cb(new Error('git exited non-zero'));
    var items = [];
    data.split(/commit/g).forEach(function(commit) {
      var matchHours = commit.match(hoursPattern);
      if (matchHours) {
        var item = {}
        item.hours = parseDuration(matchHours[0]);
        commitParts = commit.trim().split('\n');
        item.sha = commitParts[0];
        item.author = commitParts[1].match(/Author:\s+(.+)/)[1];
        var msg = commitParts.slice(3, commitParts.length);
        item.message = msg.join('\n').replace(hoursPattern, '').trim();
        item.date = new Date(commitParts[2].match(/Date:\s+(.+)/)[1]);
        items.push(item);
      }
    });
    cb(null, items);
  })
}
