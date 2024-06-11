function displayNumbers(n: number, callDisplayNumbers: (n: number) => void): void{
    let t: number = 1
    for(let i = t; i < 100; i++){
        setTimeout(()=>{
            callDisplayNumbers(t)
            t++
        }, n * i)
    }    
}
displayNumbers(1000, callDisplayNumbers)
function callDisplayNumbers(n: number): void{
    console.log('Số thứ tự:', n);
}