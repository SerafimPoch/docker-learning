const express = require("express");
const connectDB = require("./db");
const app = express();
const port = 3001;

connectDB();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
