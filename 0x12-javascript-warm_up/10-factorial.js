#!/usr/bin/node
// a script that computes and prints a factorial
const Facto = parseInt(process.argv[2]);
function factorial(Facto) {
    if (isNaN(Facto)) {
        console.log(1);
    } else {
        if (Facto === 0 || Facto === 1) {
            console.log(1);
        }
        let results = (Facto * factorial(Facto - 1));
        console.log(results);
        return results;
    }
}
factorial(Facto);
