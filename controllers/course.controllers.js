const Course = require("../models/courseModel.js");

exports.createCourse = async (req, res) => {
  const { name, discription } = req.body;

  const course = await Course.create({ name, discription });

  res.json(course);
};
