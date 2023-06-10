"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// LESSON 1
// let username: string = "zahid";
// console.log(username);
// let a: number = 12;
// let b: number = 6;
// let c: number = 2;
// console.log(a / b);
// console.log(b * c);
// basic types
// strongly typed language vs loosely typed language
// statically typed language vs dynamically typed language
// type inference
// let myName = "Zahidul Islam"; // implicit
// let fullName = "Zahidul Islam Jewel"; // explicit
// console.log(myName);
// console.log(fullName);
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// meaningOfLife = 42;
// isLoading = true;
// console.log(meaningOfLife);
// console.log(isLoading);
// album = "Van Halen";
// console.log(album);
// album = 1984;
// console.log(album);
// album = true;
// console.log(album);
// LESSON 2
// function
// const sum = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(sum(4, 9));
// const mult = (a: number, b: number): number => a * b;
// console.log(mult(4, 9));
// let song: string | number;
// song = "1984";
// console.log(song);
// song = 1984;
// console.log(song);
// let postId: string | number;
// let isActive: number | boolean;
// postId = "P102";
// console.log(postId);
// postId = 101;
// console.log(postId);
// isActive = false;
// console.log(isActive);
// isActive = 0;
// console.log(isActive);
// let sentence = "1984 is novel written by George Orwell";
// let wordRgex: RegExp = /\w+/g;
// console.log(sentence.match(wordRgex));
// let numRgex: RegExp = /\d+/g;
// console.log(sentence.match(numRgex));
// LESSON 3, arrays and objects
// let stringArray = ["one", "hey", "dave"]; // type inference
// let guitars = ["Strat", "Les Paul", 5150]; // type inference, union
// let mixedData = ["Strat", 1984, true]; // type inference, union
// console.log(stringArray);
// console.log(guitars);
// console.log(mixedData);
// stringArray.push("hola");
// console.log(stringArray);
// guitars.push(2023);
// guitars.push("Spanish");
// console.log(guitars);
// guitars.unshift("Jazz");
// console.log(guitars);
// mixedData.push(false);
// console.log(mixedData);
// let empty = []; // inference any
// let bands: string[] = [];
// bands.push("Pink Floyd");
// console.log(bands);
// // tuple, immutable
// let myTyple: [string, number, boolean] = ["Zahid", 42, true];
// console.log(myTyple);
// let mixed = ["John", 1, false];
// console.log(mixed);
// mixed = myTyple; // tuple assignable to array not other way around
// console.log(mixed);
// objects
// let myObject: object;
// myObject = [4, 9, 2];
// console.log(myObject);
// console.log(typeof myObject);
// myObject = [];
// console.log(myObject);
// myObject = {};
// console.log(myObject);
// const exampleObject = {
//     name: 'Zahid',
//     email: "zahid.jewel@gmail.com",
//     isActive: true,
// };
// console.log(exampleObject);
// type Guitarist = {
//     name: string,
//     email: string,
//     isActive: boolean,
//     albums?: (string | number)[]
// };
// const anotherObject: Guitarist = {
//     name: 'Zahid',
//     email: "zahid.jewel@gmail.com",
//     isActive: true,
// };
// console.log(anotherObject);
// const evh: Guitarist = {
//     name: 'Eddie',
//     email: "eddie@gmail.com",
//     isActive: false,
//     albums: [1984, 5150, "OU812"],
// };
// console.log(evh);
// // using interface instead of type
// interface Player {
//     name: string;
//     email: string;
//     isActive: boolean;
//     country?: string;
// }
// const player1: Player = {
//     name: 'Zahid',
//     email: "zahid.jewel@gmail.com",
//     isActive: true,
//     country: "Bangladesh",
// };
// console.log(player1);
