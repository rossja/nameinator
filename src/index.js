const animals = require('./models/animals.json').animals
const chemicals = require('./models/chemicals.json').chemicals
const colors = require('./models/colors.json').colors
const sep = '-'

const color = colors[Math.floor(Math.random() * colors.length)]
const animal = animals[Math.floor(Math.random() * animals.length)]
const chemical = chemicals[Math.floor(Math.random() * chemicals.length)]
const number = Math.floor(1000 + Math.random() * 9000)

console.log(`${color}${sep}${chemical}${sep}${animal}${sep}${number}`)
