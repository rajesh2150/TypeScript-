//1.functions
function add(a:number,b:number,c?:number):number{
    return a+b
}
add(10,20)

//void when nothing returns

function log(message:string):void{
    console.log("hello",message)
}

log("world")

//never
function error():never{
    throw new Error("Network Error")
}

//2.interfaces is like type 

interface MobileValues{
    name:string,price:number
}

let mobile1:MobileValues= {
    name:'TATA',price:200000
}
//3.unkown vs Any

let value1:unknown;
let value2:number = <number>value1;

let anyValue:any;
let anyValue2:number=20

//4.Generics = we can convert type into our required type called as generic
function createElements<Type>(items:Type[]):Type[]{
    return new Array().concat(items)
}

let numberArray=createElements<number>([10,20,30])
let stringArray=createElements<string>(['a','b','c'])