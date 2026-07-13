const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  if (req.url === "/") {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Home</title>
      </head>
      <body>
          <h1>Home Page</h1>

          <p>Welcome to our Simple HTTP Server.</p>

          <nav>
              <a href="/">Home</a> |
              <a href="/about">About</a> |
              <a href="/contact">Contact</a>
          </nav>
      </body>
      </html>
    `);
  }
  else if (req.url === "/about") {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>About</title>
      </head>
      <body>
          <h1>About Page</h1>

          <p>This is the About Page.</p>

          <nav>
              <a href="/">Home</a> |
              <a href="/about">About</a> |
              <a href="/contact">Contact</a>
          </nav>
      </body>
      </html>
    `);
  }

  else if (req.url === "/contact") {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Contact</title>
      </head>
      <body>
          <h1>Contact Page</h1>

          <p>This is the Contact Page.</p>

          <nav>
              <a href="/">Home</a> |
              <a href="/about">About</a> |
              <a href="/contact">Contact</a>
          </nav>
      </body>
      </html>
    `);
  }

});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});