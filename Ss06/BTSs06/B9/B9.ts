function removeDuplicates(inputString: string): string {
    // Sử dụng một Set để lưu trữ các ký tự đã xuất hiện
    const seen: Set<string> = new Set();
    // Chuỗi kết quả sẽ được xây dựng dựa trên các ký tự không trùng lặp
    let result: string = "";
    
    // Duyệt qua từng ký tự trong chuỗi đầu vào
    for (const char of inputString) {
        // Nếu ký tự chưa xuất hiện trong Set, thêm nó vào và thêm vào chuỗi kết quả
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    
    return result;
}


const input1: string = "banana";
const input2: string = "hello world";

const output1: string = removeDuplicates(input1);
const output2: string = removeDuplicates(input2);

console.log(output1);
console.log(output2);
