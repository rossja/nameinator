const PORT = process.env.PORT || 9001
const NODE_ENV = process.env.NODE_ENV || 'development'

const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const methodOverride = require('method-override')
const routes = require('./routes/v1')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(methodOverride())

app.use('/v1', routes)

app.listen(PORT, () => {
  console.info(`server started on port ${PORT} (${NODE_ENV})`)
})
