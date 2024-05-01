const express = require('express');
// const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  countStudents(path)
    .then((result) => {
      const response = `Number of students: ${result.totalStudents}\n`
        + `Number of students in CS: ${result.CS_FIELD}. List: ${result.csFirstNames.join(', ')}\n`
        + `Number of students in SWE: ${result.SWE_FIELD}. List: ${result.sweFirstNames.join(', ')}`;
      //   console.log(response);
      res.send(response);
    })
    .catch((error) => {
      console.error('Error:', error.message);
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
