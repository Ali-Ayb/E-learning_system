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
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

const enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = enrollment;
