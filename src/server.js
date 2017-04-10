const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3001;
const SONGS = "./songs";

app.get("/songs", (req, res) => {
  fs.readdir(SONGS, (err, files) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(files));
  });
});

app.get("/songs/:name", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
