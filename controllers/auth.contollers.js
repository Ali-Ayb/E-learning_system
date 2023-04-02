const Student = require("../models/studentModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  const existingStudent = await Student.findOne({ email });

  if (existingStudent)
    return res.status(409).json({ message: "Email already exists" });

  const student = new Student();
  student.email = email;
  student.password = password;

  if (role) student.role = role;
  await student.save();
  const { password: hashedPassword, ...newStudent } = student.toJSON();
  res.status(201).json(newStudent);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });

  if (!student) return res.status(404).json({ message: "Invalid Credentials" });

  const isMatched = student.matchPassword(password);
  if (!isMatched)
    return res.status(404).json({ message: "Invalid Credentials" });

  const token = jwt.sign(
    { id: student._id, email: student.email },
    process.env.SECRET_KEY
  );

  res.json({ token });
};
