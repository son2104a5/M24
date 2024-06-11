function swapElements<T>(arr: T[], index1: number, index2: number): T[] {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid index");
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(swapElements(arr, 1, 3));
