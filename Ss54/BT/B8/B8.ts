function countDown(n: number): Promise<void> {
    return new Promise<void>((resolve) => {
        let currentNumber = n;

        const intervalId = setInterval(() => {
            console.log(currentNumber);
            currentNumber--;

            if (currentNumber < 1) {
                clearInterval(intervalId);
                resolve();
            }
        }, 1000);
    });
}

countDown(5)
    .then(() => {
        console.log("Hoàn thành quá trình đếm");
    })
    .catch((error) => {
        console.error(error);
    });
