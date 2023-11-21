
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({

    image: String
})

module.exports = model("image", myschema);