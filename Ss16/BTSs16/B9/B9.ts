function flattenArray<T>(arr: (T | T[])[]): T[] {
    const flattened: T[] = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattened.push(...flattenArray(item));
        } else {
            flattened.push(item);
        }
    });
    return flattened;
}

const inputArray: (number | (number | number[])[])[] = [1, [2, [3, 4], 5], 6];
const outputArray: number[] = flattenArray(inputArray);
console.log(outputArray);
