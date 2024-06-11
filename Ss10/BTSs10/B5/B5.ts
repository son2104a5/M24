class Department{
    readonly id:number;
    private name:string;
    private employee:Object;
    constructor(id:number, name:string, employee:Object){
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe(){
        console.log(this.id, this.name);
    }
}

let dept1 = new Department(1, "HR", {name: "minh", age: 20, employeeId: 1041824});

dept1.describe();