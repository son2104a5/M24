type obj1 = {
    name: string;
}

type obj2 = {
    age: number;
}

function Intersection() {
    type obj = obj1 & obj2
    let obj3: obj = {
        name: 'Nguyễn Đắc Sơn',
        age: 20
    }
    return obj3
}

console.log(Intersection());
 