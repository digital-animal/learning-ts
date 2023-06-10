"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// types
// let message: string = "Hello World.\nWelcome to Learning TS";
// console.log(message);
// let isPrime: boolean = true;
// console.log(isPrime);
// let doublenum: number = 100.1;
// console.log(doublenum);
// let name: string = "Zahid";
// let sentence: string = `My name is ${name}`;
// console.log(sentence);
// let n: null = null;
// let u: undefined = undefined;
// console.log(n);
// console.log(u);
// araays
// let list1: number[] = [4,9,2,3,5];
// let list2: Array<number> = [7,8,1,6,0];
// console.log(list1);
// console.log(list2);
// tuples
// let person1: [string, number] = ["Zahid", 28];
// console.log(person1);
// enums
// enum Color {
//     RED = 1, 
//     GREEN, 
//     BLUE
// };
// let c: Color = Color.GREEN;
// console.log(c);
// any types
// let randomvalue: any = 10;
// console.log(randomvalue);
// randomvalue = true;
// console.log(randomvalue);
// randomvalue = "Jewel";
// console.log(randomvalue);
// randomvalue = 10.1;
// console.log(randomvalue);
// type assertion
// let myvar: unknown = 10;
// console.log(myvar);
// (myvar as number).toString();
// console.log(myvar);
// union types
// let multitype: number | boolean = 10;
// console.log(multitype);
// multitype = false;
// console.log(multitype);
// functions
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(add(4,9));
// console.log(add(4.9, 2.3));
// optional parameters
// function mult(num1: number, num2?: number): number {
//     if (num2) {
//         return num1 * num2;
//     } 
//     return num1;
// }
// console.log(mult(4,9));
// console.log(mult(4));
// default parameters
// function sum(num1: number, num2: number= 10): number {
//     return num1 + num2;
// }
// console.log(sum(4,9));
// console.log(sum(4));
// interface, object
// interface Human {
//     firstName: string;
//     lastName: string;
// }
// function fullName(human: Human): string {
//     return `${human.firstName} ${human.lastName}`;
// }
// const cooper: Human = {
//     firstName: "Lee", 
//     lastName: "Cooper"
// };
// console.log(cooper);
// console.log(fullName(cooper));
// class, object
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var alex = new Person("Alex", "Lee");
console.log(alex);
console.log(alex.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, designation) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.designation = designation;
        return _this;
    }
    Employee.prototype.delegateTask = function () {
        console.log("".concat(this.getFullName(), " is delegating tasks to employees"));
    };
    return Employee;
}(Person));
var john = new Employee("John", "Doe", "Manager");
console.log(john);
console.log(john.getFullName());
john.delegateTask();
// access modifiers
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, designation, age, salary) {
        var _this = _super.call(this, firstName, lastName, designation) || this;
        _this.age = age;
        _this.salary = salary;
        return _this;
    }
    Manager.prototype.manageEmployees = function () {
        console.log("".concat(this.getFullName(), " is managing employees"));
    };
    return Manager;
}(Employee));
var lee = new Manager("Lee", "Cooper", "Manager", 28, 50000);
console.log(lee);
console.log(lee.getFullName());
lee.delegateTask();
lee.manageEmployees();
