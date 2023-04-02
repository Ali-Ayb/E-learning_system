const Course = require("../models/courseModel.js");

exports.createCourse = async (req, res) => {
  const { name, description } = req.body;

  const course = await Course.create({ name, description });

  const existingCourse = await Course.findOne({ name });

  if (existingCourse)
    return res.status(409).json({ message: "Course already exists" });

  res.json(course);
};
