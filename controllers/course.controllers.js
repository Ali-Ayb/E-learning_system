const Course = require("../models/courseModel.js");

exports.createCourse = async (req, res) => {
  const { name, description } = req.body;

  const existingCourse = await Course.findOne({ name });

  if (existingCourse)
    return res.status(409).json({ message: "Course already exists" });

  const course = await Course.create({ name, description });

  res.json(course);
};

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();

  res.json(courses);
};
