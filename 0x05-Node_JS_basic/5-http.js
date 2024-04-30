const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  if (path === '/') {
    res.end('Hello Holberton School!\n');
  } else if (path === '/students') {
    countStudents('database.csv')
      .then((result) => {
        const response = 'This is the list of our students\n'
          + `Number of students: ${result.totalStudents}\n`
          + `Number of students in CS: ${result.CS_FIELD}. List: ${result.csFirstNames.join(', ')}\n`
          + `Number of students in SWE: ${result.SWE_FIELD}. List: ${result.sweFirstNames.join(', ')}`;

        res.end(response);
      })
      .catch((error) => {
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
