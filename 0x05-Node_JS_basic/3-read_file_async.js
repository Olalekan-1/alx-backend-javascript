const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }

    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.split('\n').filter((row) => row.trim() !== ''); // Filter out empty lines

        let CS_FIELD = 0;
        let SWE_FIELD = 0;
        const csFirstNames = [];
        const sweFirstNames = [];

        for (let i = 1; i < rows.length; i += 1) {
          const rowData = rows[i].split(',');
          if (rowData[3] === 'CS') {
            CS_FIELD += 1;
            csFirstNames.push(rowData[0]);
          } else if (rowData[3] === 'SWE') {
            SWE_FIELD += 1;
            sweFirstNames.push(rowData[0]);
          }
        }

        const totalStudents = rows.length - 1;

        const result = {
          totalStudents,
          CS_FIELD,
          csFirstNames,
          SWE_FIELD,
          sweFirstNames,
        };

        console.log(`Number of students: ${totalStudents}`);
        console.log(`Number of students in CS: ${CS_FIELD}. List: ${csFirstNames.join(', ')}`);
        console.log(`Number of students in SWE: ${SWE_FIELD}. List: ${sweFirstNames.join(', ')}`);

        resolve(result);
      }
    });
  });
}

module.exports = countStudents;
