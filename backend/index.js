require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uuid = require("uuid");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const File = require("./model/fileSchema");
const app = express();
const port = process.env.PORT || 5000;
// app.use(cors());
app.use(
  cors({
    origin:
      "https://file-upload-and-short-link-generation-platform-aoqo.vercel.app/",
    credentials: true,
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.static("uploads"));

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { originalname, filename } = req.file;
    const shortLink = uuid.v4(); // Use uuid.v4() to generate a UUID

    const file = new File({ originalName: originalname, shortLink: shortLink });
    await file.save();
    const yourLink = `http://localhost:5000/${shortLink}`;
    res.json({ yourLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/:shortLink", async (req, res) => {
  const { shortLink } = req.params;

  try {
    const file = await File.findOne({ shortLink });
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const filePath = path.join(__dirname, "uploads", file.originalName);
    res.sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/download/:shortLink", async (req, res) => {
  const { shortLink } = req.params;

  try {
    const file = await File.findOne({ shortLink });
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const filePath = path.join(__dirname, "uploads", file.originalName);
    const fileStream = fs.createReadStream(filePath);

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${file.originalName}"`
    );
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
app.get("/", (req, res) => {
  res.send("File-Upload-and-Short-Link-Generation-Platform");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
