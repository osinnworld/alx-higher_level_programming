#!/usr/bin/node
// a class Square that defines a square and
// inherits from class Rectangle
const newSquare = require('./5-square');

class Square extends newSquare {
	charPrint (c = 'X') {
		for (let i = 0; i < this.height; i++) {
			console.log(c.repeat(this.height));
		}
	}
}
module.exports = Square;
