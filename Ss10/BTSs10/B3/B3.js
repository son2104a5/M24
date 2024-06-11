"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}
let employ1 = new Employee("a", "b", "019323412");
let employ2 = new Employee("f", "t", "019323412");
let employ3 = new Employee("d", "n", "019323412");
employ1.printInfo();
employ2.printInfo();
employ3.printInfo();
