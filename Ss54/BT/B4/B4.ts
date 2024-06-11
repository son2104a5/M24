async function sumArrayWithAsyncAwait(arr: number[]){
    return await new Promise((resolve, reject) =>{
        const sum: number = arr.reduce((acc, current)=>{
            return acc + current
        })
        resolve(sum)
    })
}

let a = sumArrayWithAsyncAwait([1,2,3,4,5,6,7])

a.then(data=>console.log(data))