const { Router } = require('express')
const Student = require('../models/student')

const router = Router()

router.get('/', async (req, res) => {
    const data = await Student.find({})
    res.json(data)
})

module.exports = router