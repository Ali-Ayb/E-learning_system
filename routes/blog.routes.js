const { Router } = require("express");
const { getAllBlogs, getBlogById, createBlog, createComment, deleteComment } = require("../controllers/blog.controllers");
const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);

router.post("/:id/comment", createComment)
router.delete("/:blogId/comment/:commentId", deleteComment)


module.exports = router;