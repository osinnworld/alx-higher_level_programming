#!/usr/bin/node
// a script that prints a square
const x = parseInt(process.argv[2]);
if (typeof x !== 'number' || isNaN(x)) {
  console.log('Missing size');
}
for (let i = 0; i < x; i++) {
  let row = '';
  for (let b = 0; b < x; b++) {
    row += 'X';
  }
  console.log(row);
}
