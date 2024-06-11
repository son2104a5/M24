"use strict";
let students = [
    {
        id: 1,
        name: "hoa",
        class: "10A3",
    },
    {
        id: 2,
        name: "lan",
        class: "10A5",
    },
    {
        id: 3,
        name: "trang",
        class: "10A3",
    },
    {
        id: 4,
        name: "quỳnh",
        class: "10A5",
    }
];
function findStudentInClass(arr, className) {
    let text = [];
    arr.forEach(item => {
        if (item.class === className) {
            text.push(item);
        }
    });
    return text;
}
console.log(findStudentInClass(students, "10A5"));
