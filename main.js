const express = require("express");

const app = express();

const port = 3002;

app.get("/", (req, res) => {
  res.send("this is from express");
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
