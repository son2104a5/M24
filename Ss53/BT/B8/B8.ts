const nums: number[] = [1,2,3,4,5,6] 
function myFind(arr: number[], n: number, callbackArr: { (arr: number[]): void; (numbers: number[]): void; }): void{
    let check: boolean = false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            callbackArr(n);
            check = true
            break;
        }
    }
    if(!check){
        console.log(null);
    }
}

myFind(nums, 2, callbackArr)
myFind(nums, 10, callbackArr)
function callbackArr(n: number): void{
    console.log(n);
}