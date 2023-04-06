const { Router } = require("express");
const { authMidlleware } = require("../middlewares/auth.middleware");
const { adminMidlleware } = require("../middlewares/admin.middleware");

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
router.post(
  "/approveOrRejectWithdraw",
  authMidlleware,
  adminMidlleware,
  approveOrRejectWithdraw
);

module.exports = router;
