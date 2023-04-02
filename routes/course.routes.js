const { Router } = require("express");
const { createCourse } = require("../controllers/course.controllers");
const router = Router();

router.post("/", createCourse);
module.exports = router;
