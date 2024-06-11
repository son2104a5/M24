"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        return this.name;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        return "meo meo";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        return "gâu gâu";
    }
}
let dog = new Dog("chó");
let cat = new Cat("mèo");
console.log(dog.makeNoise());
console.log(cat.makeNoise());
