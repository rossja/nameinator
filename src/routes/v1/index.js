const express = require('express')
const router = express.Router()

// heartbeat
router.get('/hb', (req, res) => res.status(200).json({ status: '200', message: 'thumpThump' }))

// project name generator service
router.get('/', (req, res) => {
  const projectName = require('../../namegen').createName
  res.status(200).json({ status: '200', projectname: projectName() })
})

module.exports = router
