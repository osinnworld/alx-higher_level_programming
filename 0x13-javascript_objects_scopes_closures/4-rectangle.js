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

	rotate () {
		const tempWidth = this.width;
		this.width = this.height;
		this.height = tempWidth;
	}

	double () {
		this.width = this.width * 2;
		this.height = this.height * 2;
	}
}
module.exports = Rectangle;
