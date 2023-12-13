"use strict";
//1.functions
function add(a, b, c) {
    return a + b;
}
add(10, 20);
//void when nothing returns
function log(message) {
    console.log("hello", message);
}
log("world");
//never
function error() {
    throw new Error("Network Error");
}
let mobile1 = {
    name: 'TATA', price: 200000
};
//3.unkown vs Any
let value1;
let value2 = value1;
let anyValue;
let anyValue2 = 20;
//4.Generics = we can convert type into our required type called as generic
function createElements(items) {
    return new Array().concat(items);
}
let numberArray = createElements([10, 20, 30]);
let stringArray = createElements(['a', 'b', 'c']);
