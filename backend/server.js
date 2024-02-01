const express = require("express");
const notes = require("./data/notes.js");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
