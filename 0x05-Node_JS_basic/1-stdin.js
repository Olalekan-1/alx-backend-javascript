process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.trim();

  process.stdout.write(`Your name is: ${name}`);

  if (name.toLowerCase() === 'exit') {
    console.log('\nThis important software is now closing');
    process.exit();
  }
});

process.stdin.on('end', () => {
  console.log('\nThis important software is now closing');
});
