"use strict";
function calculate(width, height, radius) {
    if (radius)
        return Math.PI * radius * radius;
    return width * height;
}
class Shape {
    calculateArea() {
        return calculate(this.width, this.height, this.radius);
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
let rectangle = new Rectangle(20, 40);
let shape = new Circle(30);
console.log(rectangle.calculateArea());
console.log(shape.calculateArea());
