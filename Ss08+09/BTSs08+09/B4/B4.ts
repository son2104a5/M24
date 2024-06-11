function numbers(n:number|Array<number>) {
    if(typeof n === 'number'){
        return n**2
    }else{
        n.forEach((item, index)=>{
            n[index] *= n[index]
        })
        return n;
    }
}

console.log(numbers(5));
console.log(numbers([2,5,4,7]));

