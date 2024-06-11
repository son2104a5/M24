const numbers: number[] = [1,2,3,4,5,6] 
function myForEach(arr: number[], callbackArr: { (arr: number[]): void; (numbers: number[]): void; }): void{
    callbackArr(arr)
}

myForEach(numbers, callbackArr)
function callbackArr(numbers: number[]): void{
    for(let i=0;i<numbers.length;i++){
        setTimeout(()=>{
            console.log(`Vị trí : ${i}   | Phần tử: ${numbers[i]}   | Mảng:`,  numbers);
        }, 1000 * i)
    }
}