#!/usr/bin/node
// a script that searches the second biggest
// integer in the list of arguments.
const Arr = process.argv;
if (Arr.length <= 3) {
  console.log(0);
} else {
  const IntArr = [];
  for (let i = 2; i < Arr.length; i++) {
    IntArr.push(parseInt(Arr[i]));
  }
  IntArr.sort((a, b) => b - a);
  console.log(IntArr[1]);
}
