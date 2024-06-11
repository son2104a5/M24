"use strict";
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log("hello", this.userName);
    }
}
// class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extends (kế thừa)
class Child extends Parent {
    constructor(userName, password, address) {
        super(userName, password);
        this.address = address;
    }
    sayGoodbye() {
        console.log("cút đi", this.userName);
    }
}
let child1 = new Child("child1", "12345", "hà nội");
child1.sayHello();
class Child1 extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
    }
    // overrite: ghi đè phương thức
    sayGoodbye() {
        console.log("cút đi m", this.userName);
    }
}
let child2 = new Child1("child2", "12345", "hcm");
child2.sayHello();
