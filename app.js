const http = require("http");
const fs = require("fs");

const PORT = 3005;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/home.html", "utf8", (error, data) => {
      if (error) throw error;

      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/about.html", "utf8", (error, data) => {
      if (error) throw error;

      res.write(data);
      res.end();
    });
  } else if (req.url === "/post") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("pages/post.html", (error, data) => {
      if (error) throw error;

      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h3>Sorry page not found</h3>");
    res.end();
  }
});
console.log(`Running on localhost:${PORT}`);
server.listen(PORT);
