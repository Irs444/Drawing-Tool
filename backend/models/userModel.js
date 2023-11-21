
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    avatar: String,



});

module.exports = model('user', myschema);