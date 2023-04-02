const { Router } = require("express");
const {
  createCourse,
  getAllCourses,
  enrollCourse,
} = require("../controllers/course.controllers");
const router = Router();

router.get("/", getAllCourses);
router.post("/", createCourse);

module.exports = router;
