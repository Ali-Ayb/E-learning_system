const mongoose = require("mongoose");
const enrollmentSchema = new mongoose.Schema({
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

const enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = enrollment;
