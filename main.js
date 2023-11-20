const express = require("express");

const app = express();

//connnet to database

const connect = require("./database/db");

const port = 3002;

const routes = require("./routes/index.js");

app.use(routes);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
