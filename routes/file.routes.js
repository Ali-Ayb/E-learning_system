const { Router } = require("express");
const { addFile, getAllFiles } = require("../controllers/file.controllers");

const router = Router();

router.get("/", getAllFiles);
router.post("/", addFile);

module.exports = router;
