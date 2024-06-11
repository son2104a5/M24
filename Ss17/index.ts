// kiểu dữ liệu generic <>

//viết 1 function reverse các phần tử trong mảng
/* input  : [1,2,3,4,5]
   output : [5,4,3,2,1] */

function reverse<T>(arr: T[]): T[] {
    return arr.reverse();
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(['hoa', 'hồng', 'nhung']));

// viết 1 function trả về 1 mảng chứa 2 phần tử
//  input: 5,6
//  output: [5,6]
//  input:5,"hoa"
//  output: [5,"hoa"]
//  input: "hoa","hồng"
//  output: ["hoa", "hồng"]

function split<T, U>(t1: T, t2: U): [T, U] {
    return [t1, t2];
}

console.log(split(5, 6));

console.log(split(5, "hoa"));

console.log(split("hoa", "hồng"));

