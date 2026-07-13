const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    return res.end(`

            <!DOCTYPE html>
            <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Home Page</h1>
                <p>Welcome to my website.</p>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>
            </body>
            </html>

        `);
    }

  if (req.url === "bout") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    return res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About</title>
            </head>
            <body>
                <h1>About Page</h1>
                <p>This is the About page.</p>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>
            </body>
            </html>
        `);
  }

  else if (req.url === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    return res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contact</title>
            </head>
            <body>
                <h1>Contact Page</h1>
                <p>This is the Contact page.</p>
                <a href="/">Home</a> |
                <a href="/about">About</a> |
                <a href="/contact">Contact</a>


            </body>
            </html>
        `);
  }

  // 404 Page

  res.writeHead(404, {
    "Content-Type": "text/html",
  });

  res.end(`

        <!DOCTYPE html>
        <html>
        <head>
            <title>404</title>
        </head>
        <body>
            <h1>404 - Page Not Found</h1>
            <a href="/">Go Home</a>
        </body>
        </html>

    `);
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
