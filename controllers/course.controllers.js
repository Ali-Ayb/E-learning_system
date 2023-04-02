const Course = require("../models/courseModel.js");
const Student = require("../models/studentModel.js");
const Enrollment = require("../models/enrollmentModel.js");

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
  const course = await Course.findById(courseId);

  if (!student) {
    return res.status(404).json("Student not found");
  }

  if (student.courses.includes(course.name)) {
    return res.status(400).json("Student is already enrolled in this course");
  }

  if (!course) {
    return res.status(404).json("Course not found");
  }

  const addCourseToStudent = await Student.updateOne(
    { _id: studentId },
    { $push: { courses: course.name } }
  );

  const addStudentToCourse = await Course.updateOne(
    { _id: courseId },
    { $push: { students: student.email } }
  );

  res.json("Course was enrolled successfully");
};

exports.withDrawCourse = async (req, res) => {
  const { studentId, courseId } = req.body;

  const student = await Student.findById(studentId);
  const course = await Course.findById(courseId);

  const enrollment = new Enrollment({
    email: student.email,
    course_name: course.name,
  });

  await enrollment.save();
  res.json("withdraw request is sent successfully");
};

exports.approveOrRejectWithdraw = async (req, res) => {
  const { email, course_name, choice } = req.body;

  const enrollment = new Enrollment({
    email: email,
    course_name: course_name,
    status: choice,
  });

  await enrollment.save();
  res.json("choice is sent successfully");
};
