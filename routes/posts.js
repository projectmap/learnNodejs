const express = require("express");

const postsRoutes = express.Router();

postsRoutes.get("/posts", (req, res) => {
  res.send("this all posts");
});

postsRoutes.post("/posts", (req, res) => {
  res.json({ data: "new post is stored" });
});

postsRoutes.patch("/posts", (req, res) => {
  res.json({ data: "new post is updated" });
});

postsRoutes.delete("/posts", (req, res) => {
  res.json({ data: "new post is deleted" });
});

postsRoutes.get("/posts/:id", (req, res) => {
  res.send(`this is single post with id ${req.params.id}`);
});

module.exports = postsRoutes;
