export { }

// basuc types
// let id: number = 5;
// let company: string = "DSi";
// let isPublished: boolean = true;
// let x: any = "Hello";
// console.log(id);
// console.log(company);
// console.log(isPublished);
// console.log(x);

// let ids: number[] = [1,2,3,4,5];
// let arr: any[] = [1, true, "Hello"];

// tuples
// let person: [number, string, boolean] = [1, "Zahid", true];
// let employees: [number, string][] = [
//     [1, "Zahid"],
//     [2, "Jewe"]
// ];
// console.log(ids);
// console.log(arr);
// console.log(person);
// console.log(employees);

// unions
// let uuid: string | number = 22;
// console.log(uuid);

// // enum
// enum Direction {
//     UP = 1,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// console.log(Direction.UP);
// console.log(Direction.DOWN);
// console.log(Direction.LEFT);
// console.log(Direction.RIGHT);

// enum RoleType {
//     USER = 'USER',
//     ADMIN = 'ADMIN',
// }
// console.log(RoleType.USER);
// console.log(RoleType.ADMIN);

// objects, raw
// const user1: { id: number, name: string } = {
//     id: 1,
//     name: "Zahid"
// };
// console.log(user1);

// // objects, with type
// type User = {
//     id: number,
//     name: string
// };
// const user2: User = {
//     id: 2,
//     name: "Jewel"
// };
// console.log(user2);

// // objects, with interface
// interface Person {
//     id: number,
//     name: string
// };
// const user3: Person = {
//     id: 3,
//     name: "Hasan"
// };
// console.log(user3);

// type assertion
// let cid: any = 1;
// let customerId = <number>cid;
// let uid = cid as number;
// console.log(cid);
// console.log(customerId);
// console.log(uid);

// functions
// function addNum(x: number, y:number): number {
//     return x + y;
// }

// console.log(addNum(4,9));
// console.log(addNum(4.9,2.3));

// function log(message: string | number) : void {
//     console.log(message);
// }

// log("Zahid");
// log(24);


// type Point = number | string;
// const p1: Point = 1;
// const p2: Point = "2";
// console.log(p1);
// console.log(p2);

// interfaces
// interface Human {
//     id: number;
//     name: string;
//     age?: number;
// };

// const human1: Human = {
//     id: 1,
//     name: "Alex",
// };
// console.log(human1);

// const human2: Human = {
//     id: 1,
//     name: "Alex",
//     age: 21
// };
// console.log(human2);


// interface MathFunc {
//     (x: number, y:number): number
// }

// const add: MathFunc = (x: number, y:number): number => x + y;
// const sub: MathFunc = (x: number, y:number): number => x - y;
// const mul: MathFunc = (x: number, y:number): number => x * y;

// console.log(add(1,2));
// console.log(sub(4,3));
// console.log(mul(5,6));

// interface
// interface PersonInterface {
//     id: number;
//     name: string;
//     register(): string;
// }

// // class
// class Person implements PersonInterface {
//     // private id: number;
//     id: number;
//     // protected name: string;
//     name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }

//     register(): string {
//         return `${this.name} is now registered`;
//     }
// }

// const person1 = new Person(1, "Zahid");
// const person2 = new Person(2, "Jewel");
// console.log(person1);
// console.log(person2);
// console.log(person1.register());
// console.log(person2.register());

// // inheritance
// class Employee extends Person {
//     position: string;
//     constructor(id: number, name: string, position: string) {
//         super(id, name);
//         this.position = position;
//     }
// }

// const employee1 = new Employee(3, "Robi", "Software Engineer");
// console.log(employee1);
// console.log(employee1.register());

// generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(["Zahid", "Jewel", "Alex"]);

console.log(numArray);
console.log(strArray);
