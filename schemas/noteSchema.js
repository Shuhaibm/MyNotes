const mongoose = require("mongoose")
const noteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
    },


  });

  module.exports = mongoose.model("notes", noteSchema)
