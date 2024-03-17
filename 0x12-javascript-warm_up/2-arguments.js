#!/usr/bin/node
// a script that prints a message depending of the number of arguments passed
const Args = process.argv.length;
if (Args < 3) {
  console.log('No argument');
} else if (Args === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
