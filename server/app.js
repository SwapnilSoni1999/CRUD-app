const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const createRoute = require('./routes/create')
const updateRoute = require('./routes/update')
const readRoute = require('./routes/read')
const deleteRoute = require('./routes/delete')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/CRUD', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Established connection to database!'))

app.use('/api/create', createRoute)
app.use('/api/read', readRoute)
app.use('/api/update', updateRoute)
app.use('/api/delete', deleteRoute)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
