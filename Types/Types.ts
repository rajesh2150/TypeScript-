//1.string 
let messager:string = 'rajesh'
messager='vamsi';

//2.number
let age:number = 20
age = 40;

//3.boolean
let isAdmin:boolean = true
isAdmin=false;
isAdmin=true

//4.Any
let any :any="any";
any=20;
any=[{}]

//5.Array
let arr1:number[]=[10,20,30]
let names:string[]=["a","b"]
let any1:number[]=[10,30]

//6.Tuples has fixed length and fixed type
let user:[number,string]=[20,'rajesh']
let userData:[number,string][]=[[20,'rajesh'],[30,'mahesh']]

//7.Union = more than one data Type will accepts ... | called as pipe
let Union:number | string = 'a'
Union=80

//8.Enum used for constant values
const RED="red";
const BLUE="blue"
//it is hard to manage

enum Colors{
    RED="red",
    BLUE="blue"
}

console.log(Colors.RED)

//9. Objects
let car: {
    name: string;
    price: number;
}={name:'TATA',price:200000}

//this is dificult to store or handle

type CarValues= {
    name: string;
    price: number;
}

let car2:CarValues={
    name:'TATA',price:200000

}

//10. Type Assertion
let userAge:unknown=20;
let getAge:number = <number>userAge;
let getAge2:string= <string>userAge
//or

let firstname:string=userAge as string;

//11.Null Undefined
let abc:null=null
let abcd:undefined=undefined