#!/usr/bin/node
// a script that prints My number: <first argument converted in integer>
const Arg = parseInt(process.argv[2]);
if (typeof Arg !== 'number' || isNaN(Arg)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${Arg}`);
}
