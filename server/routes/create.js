const { Router } = require('express')
const Student = require('../models/student')

const router = Router()

router.post('/', async (req, res) => {
    const { first_name,
        middle_name,
        last_name,
        birth_date,
        gender,
        standard,
        division } = req.body
    try {
        const response = await Student.create({ first_name,
            middle_name,
            last_name,
            birth_date,
            gender,
            standard,
            division })
        res.json({ msg: "Inserted!", id: response.id })
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: "Invalid request!" })
    }
})

module.exports = router