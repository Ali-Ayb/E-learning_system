const Course = require("../models/courseModel.js");

exports.createCourse = async (req, res) => {
  const { name, discription } = req.body;

  const blog = await Blog.create({ name, discription });

  res.json(blog);
};
