const express = require("express");

const app = express();

const port = 3002;

const routes = require("./routes/index.js");

app.use(routes);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
