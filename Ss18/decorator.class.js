"use strict";
/*
    Dùng để bổ sung, thay đổi thuộc tính, phương thức cho đối tượng
    *Cú pháp: @
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
// function decorator để thêm thuộc tính
function decoratorProperty(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.address = "HN";
        }
    };
}
let Student = class Student {
    constructor(userName) {
        this.userName = userName;
    }
};
Student = __decorate([
    decoratorProperty,
    __metadata("design:paramtypes", [String])
], Student);
let std1 = new Student("MT");
// Thêm thuộc tính age cho đối tượng std1
console.log(std1);
