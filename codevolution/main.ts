export { } // treating as module instead of script

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
class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const alex: Person = new Person("Alex", "Lee");
console.log(alex);
console.log(alex.getFullName());

class Employee extends Person {
    designation: string;

    constructor(firstName: string, lastName: string, designation:string) {
        super(firstName, lastName);
        this.designation = designation;
    }

    delegateTask() {
        console.log(`${this.getFullName()} is delegating tasks to employees`);
    }
}

const john: Employee = new Employee("John", "Doe", "Manager");
console.log(john);
console.log(john.getFullName());
john.delegateTask();

// access modifiers
class Manager extends Employee {
    public age: number;
    private salary: number;
    protected nidnum: string;

    constructor(firstName: string, lastName: string, designation:string, age: number, salary: number) {
        super(firstName, lastName, designation);
        this.age = age;
        this.salary = salary;
    }

    public manageEmployees() {
        console.log(`${this.getFullName()} is managing employees`);
    }
}

const lee = new Manager("Lee", "Cooper", "Manager", 28, 50000);
console.log(lee);
console.log(lee.getFullName());
lee.delegateTask();
lee.manageEmployees();
