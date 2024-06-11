function isPrimeWithPromise(n: number): Promise<boolean|void>{
    return new Promise((resolve, reject) => {
        let isPrime: number = 0
        for (let i = 1; i <= n; i++){
            if(n%i==0) isPrime++
        }
        if(isPrime<=2) resolve(true)
        else resolve(false)
    })
    .then((data)=>console.log(data))
}

isPrimeWithPromise(2)
isPrimeWithPromise(3)
isPrimeWithPromise(4)
