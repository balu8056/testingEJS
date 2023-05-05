const express = require("express");
const path = require("path");
const fs = require("fs");

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const port = 9000;

app.use("/", (req, res) => {
  res.render("hel");
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
