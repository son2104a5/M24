"use strict";
// 1. array
let students = ["hoa", "hồng"];
let numbers = [5, 6, 9];
// 2. object
let cat = {
    name: "pussy",
    height: 50,
    color: "white",
};
// 3. enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "minh",
    age: 20,
    role: 0
};
// 4. void
function sayHello() {
    console.log("xin chào PTIT");
    return;
}
sayHello();
function sum(a, b) {
    return a + b;
}
sum(5, 6);
// 5. unknown: cũng giống any nhưng nó chặt hơn, khi sử dụng phải kiểm tra
function typeAny1(userName) {
    if (typeof userName == "string") {
        console.log(userName.toUpperCase());
    }
    else {
        console.log("không phải là string");
    }
}
typeAny1("hoa");
// 6. never: thường dùng trong vòng lặp vô tận, không có điểm dừng
// function typeNever():never {
//     while(true) {
//         console.log("vòng lặp tuần hoàn");
//     }
// }
// typeNever()
