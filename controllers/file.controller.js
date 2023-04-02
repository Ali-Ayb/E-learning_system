const File = require("../models/fileModel.js");

exports.addFile = async (req, res) => {
  try {
    const base64File = req.body.file;

    const fileBuffer = Buffer.from(base64File, "base64");

    const fileName =
      Date.now().toString() + "-" + Math.round(Math.random() * 1e9).toString();

    const filePath = path.join(__dirname, "..", "uploads", fileName);
    await fs.promises.writeFile(filePath, fileBuffer);

    const file = new File({ name: fileName, path: filePath });
    await file.save();

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
