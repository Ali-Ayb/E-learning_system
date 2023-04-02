const Course = require("../models/courseModel.js");
const Student = require("../models/studentModel.js");

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

exports.enrollCourse = async (req, res) => {
  const { studentId, courseId } = req.body;

  const student = await Student.findById(studentId);
  if (!student) {
    return res.status(404).json("Student not found");
  }

  if (student.courses.includes(courseId)) {
    return res.status(400).json("Student is already enrolled in this course");
  }

  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json("Course not found");
  }

  const addCourseToStudent = await Student.updateOne(
    { _id: studentId },
    { $push: { courses: courseId } }
  );

  const addStudentToCourse = await Course.updateOne(
    { _id: courseId },
    { $push: { students: studentId } }
  );

  res.json("Course was enrolled successfully");
};
