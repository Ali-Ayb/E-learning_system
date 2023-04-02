const Course = require("../models/courseModel.js");

exports.createCourse = async (req, res) => {
  const { name, description } = req.body;

  const course = await Course.create({ name, description });

  res.json(course);
};
