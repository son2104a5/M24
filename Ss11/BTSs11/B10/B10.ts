class Shape {
    calculatePerimeter(): number {
        return calculate(this.width, this.height, this.radius);
    }
    calculate(width: number, height: number): number;
    calculate(width: number, height: number, radius: number): number;
    calculate(width: number, height: number, radius?: number): number {
        if (radius) return Math.PI * radius * 2;
        return (width + height)*2
    }
    
}

class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
}

let rectangle1 = new Rectangle(20, 40);

let shape1 = new Circle(30);

console.log(rectangle1.calculatePerimeter());

console.log(shape1.calculatePerimeter());