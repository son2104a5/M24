/*
    Trang trí cho phương thức
    phương thức và hàm khác nhau ntn?
    - hàm là những function tự định nghĩa
    - phương thức dùng trong đối tượng hoặc lớp

    ==> để dùng decorator cho function thì phải dùng @ 
*/

// tạo function deco cho function sum trong class Test
function decorMethod(target:any, propertyKey:string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    // trong descriptor có chứa 1 đối tượng có chứa thuộc tính value
    // nhờ cái value thì mới đi decor cho method đc
    descriptor.value=function (a:number, b: number): number {
        return (a+b)*2
    }
}

class Test{
    // viết phương thức cho class Test
    // tạo function tính tổng
    // đặt decorator
    @decorMethod
    sum1(a:number,b:number):number{
        return a+b;
    }
    sum2(a:number,b:number):number{
        return a+b;
    }
}

let sum1 = new Test()

sum1.sum1(1,2)