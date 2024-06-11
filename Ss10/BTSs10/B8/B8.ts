class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    rectangleArea(){
        return this.width * this.height;
    }
    rectanglePerimeter(){
        return 2 * (this.width + this.height);
    }
    changeRectangle(){
        this.width = 100;
        this.height = 200;
    }
}

let rectangle = new Rectangle(20, 40);

console.log(rectangle.rectangleArea());

console.log(rectangle.rectanglePerimeter());

rectangle.changeRectangle();

console.log(rectangle.rectangleArea());

console.log(rectangle.rectanglePerimeter());