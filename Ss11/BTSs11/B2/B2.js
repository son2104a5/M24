"use strict";
class Employee1 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
    getPhone() {
        return this.phone;
    }
}
class Manager2 extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(this.name, this.company, this.getPhone(), this.teamSize);
    }
}
let manager11 = new Manager2("a", "b", "019323412", 10);
manager1.printInfo();
