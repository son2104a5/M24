// để ktra dữ liệu thì dùng typeof
// kiểu dữ liệu array: object
// làm sao phân biệt được array và object
/* 
    dùng typeof không giải quyết vấn đề đơực
    vì typeof của array và object đều là object
*/

// union
let text1: string|number = "hello";
text1 = 5;

function sum(a:number|string, b:number):number|string {
    //ktra đk trc khi cộng
    if(typeof a == "number") {
        return a + b;
    } else {
        return a + b;
    }
}
sum(5,6);

// tuple
let arr1:(number|string)[]=[5, "hoa"]
arr1.push(1)
let arr2:[number,string]=[5, "lan"];
arr2.push(6)
console.log(arr2);

// aliass
type Test=string|number|null|undefined

let test1:Test="";

// intersection: giao nhau

type A = {
    name: string;
}

type B = {
    address: string;
    id: number
}

type C = A & B; // intersection

let c1:C = {
    name: "minh thu",
    address: "ha noi",
    id: 1
}