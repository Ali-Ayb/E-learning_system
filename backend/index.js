const fileRouter = require("./routes/file.routes");
const { authMidlleware } = require("./middlewares/auth.middleware");
const authRouter = require("./routes/auth.routes");
const courseRouter = require("./routes/course.routes");
const studentRouter = require("./routes/student.routes");

const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());

app.use("/auth", authRouter);
app.use("/course", authMidlleware, courseRouter);
app.use("/student", authMidlleware, studentRouter);
app.use("/file", authMidlleware, fileRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.error(err);
  console.log("Server is running on port ", process.env.PORT);
  require("./configs/db.config");
});
