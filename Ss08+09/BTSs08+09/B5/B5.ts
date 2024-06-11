let x: string | number;
x = "Hello";
x = 10;
// x = true;

interface Employees {
    name: string;
    age: number;
}

interface Manager {
    department: string;
}

type EmployeeManager = Employees & Manager;

let empManage: EmployeeManager = {
    name: "John",
    age: 30,
    department: "HR"
};

// ==> Union Types cho phép biến hoặc tham số chứa giá trị của một trong các kiểu được định nghĩa.
// ==> Intersection Types tạo ra một kiểu mới kết hợp tất cả các thành phần của các kiểu được nối lại với nhau.