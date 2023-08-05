const mongoose = require('mongoose')

const db_schema = new mongoose.Schema({
    name : {
        require: true,
        type: String
    },
    age : {
        require: true,
        type: Number
    }
})

module.exports = mongoose.model('Data',db_schema)