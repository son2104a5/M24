class Vehicle {
    name: string
    year: number
    company: string
    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

let car = new Vehicle("lamboghini", 2020, "tao")
let motor = new Vehicle("honda", 2020, "nó")

console.log(car);
console.log(motor);
