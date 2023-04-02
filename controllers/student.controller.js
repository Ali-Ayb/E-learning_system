const Student = require("../models/studentModel.js");

exports.getStudentsWithCourses = async (req, res) => {
  const students = await Student.find({ courses: { $ne: [] } });
  res.json(students);
};
