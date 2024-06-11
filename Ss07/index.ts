// 1. array

let students:string[]=["hoa","hồng"]

let numbers:Array<number>=[5,6,9]

// 2. object

let cat:{name:string, height:number,color:string}={
    name: "pussy",
    height:50,
    color:"white",
}

// 3. enum

enum Role{
    ADMIN, // có thể gán giá trị, vd: ADMIN = 5
    USER,
}
let person:{name:string, age:number,role:Role.ADMIN} = {
    name: "minh",
    age:20,
    role: 0
}

// 4. void

function sayHello():void {
    console.log("xin chào PTIT");
    return
}
sayHello()

function sum(a:number, b:number):number {
    return a + b;
}
sum(5,6)

// 5. unknown: cũng giống any nhưng nó chặt hơn, khi sử dụng phải kiểm tra

function typeAny1(userName:unknown):void {
    if(typeof userName=="string")  {
        console.log(userName.toUpperCase());
    } else{
        console.log("không phải là string"); 
    }
}
typeAny1("hoa")

// 6. never: thường dùng trong vòng lặp vô tận, không có điểm dừng

// function typeNever():never {
//     while(true) {
//         console.log("vòng lặp tuần hoàn");
//     }
// }
// typeNever()