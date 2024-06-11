function checkPrimeNumber(arr:Array<number>):boolean {
    let result:number = 0;
    arr.forEach(item=>{
        let count:number = 0;
        for (let i = 0; i < item; i++){
            if(item%i==0) count++;
        }
        if(count<=2) result++
    })
    if(result==arr.length) return true
    else return false
}

console.log(checkPrimeNumber([1,3,4,2,7,9,32,43,12,45]));
console.log(checkPrimeNumber([3,5,7,11,13]));
 