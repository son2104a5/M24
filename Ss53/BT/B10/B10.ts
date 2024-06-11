const arrs: number[] = [1,2,2,3,4,5,6] 
function myFilter(arr: number[], n: number): void{
    let check: boolean = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            callbackArr()
            check = true;
            break;
        }
    }
    if(!check){
        console.log(-1);
    }
    
}

myFilter(arrs, 2, callbackArr)
myFilter(arrs, 10, callbackArr)
function callbackArr(): void{
    console.log(1);
}