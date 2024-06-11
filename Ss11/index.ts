class Parent{
    userName: string
    password: string
    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
    sayHello(){
        console.log("hello", this.userName)
    }
}

// class con muốn kế thừa class cha thì bắt buộc phải dùng từ khóa extends (kế thừa)

class Child extends Parent{
    address: string
    constructor(userName: string, password: string, address: string) {
        super(userName, password);
        this.address = address;
    }
    sayGoodbye():void{
        console.log("cút đi", this.userName)
    }
}

let child1 = new Child("child1","12345","hà nội")

child1.sayHello()

class Child1 extends Child{
    constructor(userName: string, password: string, address: string){
        super(userName, password, address)
    }
    // overrite: ghi đè phương thức
    sayGoodbye():void{
        console.log("cút đi m", this.userName)
    }
}

let child2 = new Child1("child2","12345","hcm")

child2.sayHello()