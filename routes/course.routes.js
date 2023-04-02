const { Router } = require("express");
const {
  createCourse,
  getAllCourses,
} = require("../controllers/course.controllers");
const router = Router();

router.get("/", getAllCourses);
router.post("/", createCourse);

module.exports = router;
