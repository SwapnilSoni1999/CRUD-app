const { Schema, model } = require('mongoose')

//first name, middle name, last name, birth date, gender, standard and division
const StudentSchema = new Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String, default: null },
    last_name: { type: String, required: true },
})
