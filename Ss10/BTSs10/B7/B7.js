"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    circleArea() {
        return Math.PI * this.radius * this.radius;
    }
    circlePerimeter() {
        return 2 * Math.PI * this.radius;
    }
    changeRadius() {
        this.radius = 40;
    }
}
let circle1 = new Circle(10);
console.log(circle1.circleArea());
console.log(circle1.circlePerimeter());
circle1.changeRadius();
console.log(circle1.circleArea());
console.log(circle1.circlePerimeter());
