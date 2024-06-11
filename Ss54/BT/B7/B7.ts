function myFirstPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Success!");
        }, 1000);
    });
}

myFirstPromise()
    .then((result) => {
        console.log(`Result! ${result}`);
    })
    .catch((error) => {
        console.error(error);
    });
