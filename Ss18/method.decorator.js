"use strict";
/*
    Trang trí cho phương thức
    phương thức và hàm khác nhau ntn?
    - hàm là những function tự định nghĩa
    - phương thức dùng trong đối tượng hoặc lớp

    ==> để dùng decorator cho function thì phải dùng @
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tạo function deco cho function sum trong class Test
function decorMethod(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    // trong descriptor có chứa 1 đối tượng có chứa thuộc tính value
    // nhờ cái value thì mới đi decor cho method đc
    descriptor.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Test {
    // viết phương thức cho class Test
    // tạo function tính tổng
    // đặt decorator
    sum1(a, b) {
        return a + b;
    }
    sum2(a, b) {
        return a + b;
    }
}
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Test.prototype, "sum1", null);
let sum1 = new Test();
sum1.sum1(1, 2);
