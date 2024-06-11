/*
    Dùng để bổ sung, thay đổi thuộc tính, phương thức cho đối tượng
    *Cú pháp: @
*/

// function decorator để thêm thuộc tính

function decoratorProperty<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      address = "HN";
    };
}
@decoratorProperty

class Student {
    userName: string;
    constructor(userName: string) {
        this.userName = userName;
    }
}

let std1 = new Student("MT");
// Thêm thuộc tính age cho đối tượng std1
console.log(std1);

