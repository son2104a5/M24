"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
}
let electronics = new Electronics("Laptop", 100000, "Apple");
electronics.getDescription();
