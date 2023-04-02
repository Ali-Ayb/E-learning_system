const fs = require("fs");
const path = require("path");
const File = require("../models/fileModel.js");
const exp = require("constants");

exports.addFile = async (req, res) => {
  const base64File = req.body.file;
  const file_name = req.body.file_name;
  const file_ext = req.body.file_ext;

  const fileBuffer = Buffer.from(base64File, "base64");

  const uniqueFileName =
    Date.now().toString() + "-" + Math.round(Math.random() * 1e9).toString();

  const filePath = path.join(__dirname, "..", "uploads", uniqueFileName);
  await fs.promises.writeFile(filePath, fileBuffer);

  const file = new File({ name: file_name + "." + file_ext, path: filePath });
  await file.save();

  res.status(200).json({ message: "File uploaded successfully" });
};

exports.getAllFiles = async (req, res) => {
  const files = await File.find();

  res.json(files);
};
