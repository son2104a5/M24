// extend trong generic

// function merge (gộp, hợp nhất)

function merge<T extends object,U>(p1: T, p2: U): T&U {
    return Object.assign(p1, p2)
}

console.log(merge({name: "hoa"}, {age:15}));

// toán tử ? (optional chain)
function add(a: number, b?: number): number {
    return b?a+b:a;
}

console.log(add(1,4));

console.log(add(1));

// đệ quy

