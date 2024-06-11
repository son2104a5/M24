function calculate(a: number, b: number, sum: (total: number) => void): void{
    let total: number = a + b
    sum(total)
}
calculate(10, 10, sum)
function sum(total: number): void{
    console.log("a + b =",total);
}