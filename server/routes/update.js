const { Router } = require('express')
const Student = require('../models/student')

const router = Router()

router.post('/', async (req, res) => {
    try {  
        const response = await Student.updateOne({ _id: req.body._id }, req.body)
        const data = await Student.findById(req.body._id)
        res.json({ msg: "Updated!", data: data })
    } catch (error) {
        res.status(503).json({ msg: "internal error" })
    }
})

module.exports = router