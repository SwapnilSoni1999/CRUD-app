const { Schema, model } = require('mongoose')

//first name, middle name, last name, birth date, gender, standard and division
const StudentSchema = new Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String, required: true },
    last_name: { type: String, required: true },
    birth_date: { type: Date, required: true },
    gender: { type: String, required: true },
    standard: { type: Number, required: true },
    division: { type: String, required: true }
})

const StudentModel = model('Student', StudentSchema, 'student')

module.exports = StudentModel