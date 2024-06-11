class Vehicle2 {
    name: string
    protected year: number
    private company: string
    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getVehicle2(){
        console.log(this.name, this.year, this.company);
        
    }
}

let car2 = new Vehicle2("lamboghini", 2020, "tao")
let motor2 = new Vehicle2("honda", 2020, "nó")

car2.getVehicle2()

