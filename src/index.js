const gen = require('project-name-generator')

exports.generateProjectName = function (req) {
  return gen({
    number: true,
    words: 2
  // alliterative: true
  }).dashed
}
