"use strict";
//1.string 
let messager = 'rajesh';
messager = 'vamsi';
//2.number
let age = 20;
age = 40;
//3.boolean
let isAdmin = true;
isAdmin = false;
isAdmin = true;
//4.Any
let any = "any";
any = 20;
any = [{}];
//5.Array
let arr1 = [10, 20, 30];
let names = ["a", "b"];
let any1 = [10, 30];
//6.Tuples has fixed length and fixed type
let user = [20, 'rajesh'];
let userData = [[20, 'rajesh'], [30, 'mahesh']];
//7.Union = more than one data Type will accepts ... | called as pipe
let Union = 'a';
Union = 80;
//8.Enum used for constant values
const RED = "red";
const BLUE = "blue";
//it is hard to manage
var Colors;
(function (Colors) {
    Colors["RED"] = "red";
    Colors["BLUE"] = "blue";
})(Colors || (Colors = {}));
console.log(Colors.RED);
//9. Objects
let car = { name: 'TATA', price: 200000 };
let car2 = {
    name: 'TATA', price: 200000
};
//10. Type Assertion
let userAge = 20;
let getAge = userAge;
let getAge2 = userAge;
//or
let firstname = userAge;
//11.Null Undefined
let abc = null;
let abcd = undefined;
