"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speedDown) {
        this.speed -= speedDown;
    }
    speedUp(speedUp) {
        this.speed += speedUp;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let car = new Bicycle("lamborghini", 50, 2681945, 100);
car.slowDown(10);
car.showSpeed();
car.speedUp(60);
car.showSpeed();
