const { Router } = require("express");
const { addFile } = require("../controllers/file.controllers");

const router = Router();

router.post("/", addFile);

module.exports = router;
