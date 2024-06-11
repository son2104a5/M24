class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let std1 = new Student(1, 20, "ngu1@gmail.com")
let std2 = new Student(2, 20, "ngu2@gmail.com")
let std3 = new Student(3, 20, "ngu3@gmail.com")

let arrStudent: Array<Student> = [std1, std2, std3]

arrStudent.forEach(student => {
    console.log(student);
    
})