const { Router } = require("express");
const {
  getStudentsWithCourses,
} = require("../controllers/student.controllers");

const router = Router();

router.get("/enrolledStudents", getStudentsWithCourses);

module.exports = router;
