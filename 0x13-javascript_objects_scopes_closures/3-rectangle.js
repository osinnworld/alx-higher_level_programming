#!/usr/bin/node
// a class Rectangle that defines a rectangle
class Rectangle {
	constructor (w, h) {
		if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
			return this;
		} else {
			this.width = w;
			this.height = h;
		}
	}

	print () {
		for (let i = 0; i < this.height; i++) {
			let row = '';
			for (let b = 0; b < this.width; b++) {
				row += 'X';
			}
			console.log(row);
		}
	}
}
module.exports = Rectangle;
