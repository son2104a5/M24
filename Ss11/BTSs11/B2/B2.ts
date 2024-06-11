class Employee1 {
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

class Manager2 extends Employee1 {
    teamSize: number
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone)
        this.teamSize = teamSize
    }
    override printInfo(): void {
        console.log(this.name, this.company, this.getPhone(), this.teamSize);
    }
}

let manager11 = new Manager2("a", "b", "019323412", 10)

manager1.printInfo()