"use strict";
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    makeSound() {
        console.log("Animal makes a sound");
    }
}
/*
    - Các thành phần được đánh dấu là protected có thể được truy cập từ bên trong lớp đó hoặc từ bên trong các lớp con của nó.
    - Không thể truy cập từ bên ngoài của lớp hoặc các lớp không liên quan.
    - Thường được sử dụng khi muốn cho phép lớp con truy cập và sử dụng các thành phần của lớp cha.
*/
class Dog extends Animal {
    constructor(legs, breed) {
        super(legs);
        this.breed = breed;
    }
    displayInfo() {
        console.log(`The ${this.breed} dog has ${this.legs} legs`);
        this.makeSound();
    }
}
const myDog = new Dog(4, "Golden Retriever");
myDog.displayInfo();
/*
    - Các thành phần được đánh dấu là private chỉ có thể được truy cập từ bên trong cùng một lớp.
    - Không thể truy cập từ bên ngoài của lớp, kể cả từ các lớp con.
    - Thường được sử dụng khi muốn bảo vệ dữ liệu và đảm bảo rằng nó không bị sửa đổi hoặc truy cập từ các phần khác của chương trình.
*/ 
