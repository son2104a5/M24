async function isPrimeWithAsyncAwait(n: number): Promise<boolean|void>{
    return await new Promise((resolve, reject) => {
        let isPrime: number = 0
        for (let i = 1; i <= n; i++){
            if(n%i==0) isPrime++
        }
        if(isPrime<=2) resolve(true)
        else resolve(false)
    })
    .then((data)=>console.log(data))
}

isPrimeWithAsyncAwait(2)
isPrimeWithAsyncAwait(3)
isPrimeWithAsyncAwait(4)
