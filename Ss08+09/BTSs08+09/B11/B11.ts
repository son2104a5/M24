interface Person {
    name: string;
    age: number;
}

interface Address {
    street: string;
    city: string;
}

type Information = Person & Address;

let info: Information = {
    name: "minh",
    age:20,
    city: "Hồ Chí Minh",
    street: "Hòa Bình"
}
console.log(info);
