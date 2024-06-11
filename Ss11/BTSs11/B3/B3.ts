class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(){
        console.log(this.name);
    }
}

let person1 = new Person("nam")

person1.displayInfo()