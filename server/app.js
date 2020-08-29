const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))