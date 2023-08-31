const express = require("express");

const router = express.Router();

const path = require("path");

const postsRoutes = require("./posts.js");

router.get("/", (req, res) => {
  const fileAbsolutePath = path.join(__dirname, "../pages/home.html");
  res.sendFile(fileAbsolutePath);
});

router.use(postsRoutes);

router.all("/*", (req, res) => {
  res.send("page not found");
});

module.exports = router;
