const { Router } = require("express");
const {
  createCourse,
  getAllCourses,
  enrollCourse,
  withDrawCourse,
  approveOrRejectWithdraw,
} = require("../controllers/course.controllers");
const router = Router();

router.get("/", getAllCourses);
router.post("/", createCourse);
router.post("/enroll", enrollCourse);
router.post("/withDrawCourse", withDrawCourse);
router.post("/approveOrRejectWithdraw", approveOrRejectWithdraw);

module.exports = router;
