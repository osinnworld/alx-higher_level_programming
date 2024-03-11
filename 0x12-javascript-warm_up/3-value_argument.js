#!/usr/bin/node
// a script that prints the first argument passed to it
const Args = process.argv;
if (Args[2]) {
  console.log(Args[2]);
} else {
  console.log('No argument');
}
