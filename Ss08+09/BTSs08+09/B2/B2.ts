type Prototype = {
    name: string;
    age: number;
    address: object;
}

let person: Prototype = {
    name: "minh",
    age: 20,
    address: {
        city: "Hà Nội",
        country: "Vietnam"
    }
}

function validatePersons(arr:Prototype) {
    if((arr.hasOwnProperty("name")&&typeof arr.name === "string")&&(arr.hasOwnProperty("age")&&typeof arr.age === "number")&&(arr.hasOwnProperty("address")&&!Array.isArray(arr.address))){
        return true;
    }
    return false;
}

console.log(validatePersons(person));