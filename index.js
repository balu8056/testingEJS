import express from "express";
import ejs from 'ejs'
import path from 'path'

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", 'ejs')
const port = 9000;

app.use("/", (req, res) => {
  res.render("hel");
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
