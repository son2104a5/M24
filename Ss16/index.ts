function printAny(a:string|number): string|number {
    return a
}

console.log(printAny(11111111111));
console.log(printAny("kkk là chó"));

// function test<T>(params:T|T[]): T[]{
//     if(typeof params === "number") return [params]
//     return [params[params.length - 1]]
// }

// console.log(test(1));
// console.log(test([1, 2, 3]));
