class Employee {
    name: string
    protected company: string
    private phone: string
    constructor(name: string, company: string, phone: string) {
        this.name = name
        this.company = company
        this.phone = phone
    }
    printInfo() {
        console.log(this.name, this.company, this.phone)
    }
    getPhone(){
        return this.phone;
    }
}

class Manager extends Employee {
    teamSize: number
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone)
        this.teamSize = teamSize
    }
}

let manager1 = new Manager("a", "b", "019323412", 10)

manager1.printInfo()