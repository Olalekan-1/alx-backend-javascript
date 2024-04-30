const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const rows = data.split('\n');
  let SWE_FIELD = 0;
  let CS_FIELD = 0;
  const csFirstNames = [];
  const sweFirstNames = [];

  for (let i = 1; i < rows.length; i += 1) {
    const rowData = rows[i].split(',');
    if (rowData[3] === 'CS') {
      CS_FIELD += 1;
      csFirstNames.push(rowData[0]);
    } else {
      SWE_FIELD += 1;
      sweFirstNames.push(rowData[0]);
    }
  }
  console.log(rows.length - 1);
  console.log(`Number of students in CS: ${CS_FIELD}. List: ${csFirstNames.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE_FIELD}. List: ${sweFirstNames.join(', ')}`);
}

module.exports = countStudents;
