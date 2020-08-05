const mongoose = require('mongoose');

//schema is just a blueprint
const postSchema = mongoose.Schema({
  //js objects are "schema types" in mongoose docs
  title: { type: String, required: true },
  content: { type: String, required: true }
});

//in order to create an objects off of the blueprint/definition
//must turn it into a model
module.exports = mongoose.model('Post', postSchema);
