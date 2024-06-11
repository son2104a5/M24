"use strict";
// để ktra dữ liệu thì dùng typeof
// kiểu dữ liệu array: object
// làm sao phân biệt được array và object
/*
    dùng typeof không giải quyết vấn đề đơực
    vì typeof của array và object đều là object
*/
// union
let text1 = "hello";
text1 = 5;
function sum(a, b) {
    //ktra đk trc khi cộng
    if (typeof a == "number") {
        return a + b;
    }
    else {
        return a + b;
    }
}
sum(5, 6);
// tuple
let arr1 = [5, "hoa"];
arr1.push(1);
let arr2 = [5, "lan"];
arr2.push(6);
console.log(arr2);
let test1 = "";
let c1 = {
    name: "minh thu",
    address: "ha noi",
    id: 1
};
