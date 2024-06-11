class Vehicle {
    protected name: string
    protected speed: number
    protected id: number
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speedDown: number){
        this.speed -= speedDown;
    }
    speedUp(speedUp: number){
        this.speed += speedUp
    }
    showSpeed(){
        console.log(this.speed);
    }
}

class Bicycle extends Vehicle {
    gear: number
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
}

let car = new Bicycle("lamborghini", 50, 2681945, 100)

car.slowDown(10)

car.showSpeed()

car.speedUp(60)

car.showSpeed()