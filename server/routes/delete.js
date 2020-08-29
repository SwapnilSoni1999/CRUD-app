const { Router } = require('express')
const Student = require('../models/student')

const router = Router()

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const response = await Student.findByIdAndDelete(id)
        res.json({ msg: "Done!" })
    } catch(err) {
        res.json({ msg: "Done! but error" })
    }
    
})

module.exports = router