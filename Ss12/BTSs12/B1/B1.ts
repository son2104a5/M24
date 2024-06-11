abstract class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract makeNoise(): void;
    printName():string{
        return this.name;
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): string {
        return "meo meo"
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeNoise(): string {
        return "gâu gâu"
    }
}

let dog = new Dog("chó");

let cat = new Cat("mèo");

console.log(dog.makeNoise());

console.log(cat.makeNoise());
