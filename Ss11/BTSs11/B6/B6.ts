class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription(){

    }
}

class Electronics extends Product{
    private brand: string;
    constructor(name: string, price: number, brand: string){
        super(name, price);
        this.brand = brand;
    }
}

let electronics = new Electronics("Laptop", 100000, "Apple");

electronics.getDescription();