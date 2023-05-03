import express from "express";
import ejs from 'ejs'

const app = express();
app.set("view engine", 'ejs')
const port = 9000;

app.use("/", (req, res) => {
  res.render("hel");
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});