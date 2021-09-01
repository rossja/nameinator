const animals = require('./models/animals.json').animals
// const chemicals = require('./models/chemicals.json').chemicals
const colors = require('./models/colors.json').colors
const sep = '-'

exports.createName = function (req) {
  const color = colors[Math.floor(Math.random() * colors.length)]
  const animal = animals[Math.floor(Math.random() * animals.length)]
  // const chemical = chemicals[Math.floor(Math.random() * chemicals.length)]
  const number = Math.floor(1000 + Math.random() * 9000)
  // const projectName = `${color}${sep}${chemical}${sep}${animal}${sep}${number}`
  const projectName = `${color}${sep}${animal}${sep}${number}`
  return projectName
}
