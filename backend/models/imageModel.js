
const { Schema, model, Types } = require('../connection');

const myschema = new Schema({

    image: String,
    user : {type: Types.ObjectId, ref : "user"},
    createdAt : Date
})

module.exports = model("image", myschema);