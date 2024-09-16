const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

/**
 * Handles incoming HTTP requests and sends a plain text response.
 *
 * This server listens for incoming requests and responds with a message `"Hello Holberton School!"`.
 * It sets the content type as plain text and ensures the correct content length is provided in the headers.
 *
 * The server listens on `localhost:1245` and logs this information when it starts.
 *
 * @event request - Handles incoming requests.
 * @param {http.IncomingMessage} req - The incoming HTTP request (not used in this case).
 * @param {http.ServerResponse} res - The response object used to send the HTTP response.
 */
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  // Set the response headers for content type and length
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the status code to 200 (OK)
  res.statusCode = 200;

  // Send the response as a Buffer containing the text
  res.write(Buffer.from(responseText));
});

/**
 * Starts the HTTP server on the specified host and port.
 *
 * The server listens on `localhost:1245` and logs the URL where it's accessible.
 *
 * @listens {http.Server}
 */
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
