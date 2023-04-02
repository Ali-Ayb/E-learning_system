const mongoose = require("mongoose");
const enrollementSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  course_name: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

const enrollement = mongoose.model("Enrollement", enrollementSchema);

module.exports = enrollement;
