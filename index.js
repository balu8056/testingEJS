import express from "express";
import ejs from 'ejs'
import path from 'path'
import { readdirSync } from 'fs'

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

console.dir(getDirectories("/"))

const app = express();
app.set('views', path.join(path.basename(path.resolve(process.cwd())), '/'))
app.set("view engine", 'ejs')
const port = 9000;

app.use("/", (req, res) => {
  res.render("hel");
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
