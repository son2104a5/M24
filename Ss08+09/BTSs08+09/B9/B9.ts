interface Person {
    name: string;
    age: number;
}

interface Employee extends Person{
    employeeId: number;
}

let employee: Employee = {
    name: "minh",
    age: 20,
    employeeId: 1041824
}

console.log(employee);
