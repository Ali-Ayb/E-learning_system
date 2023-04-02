const mongoose = require("mongoose")


const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    requried: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
})


const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  commnets: [commentSchema]
})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog