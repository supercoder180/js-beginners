// 7 types : String , Number , Null , Boolean, undefined, symbol, BigInt

// Non primitive datatype

// arrays , objects, functions

const score = 100
const  scorevalue = 100.3 // Number is number it is not categorized as float or double 

const isLogedIn = false
const outsideTemp = null 
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // op is false since symol considers both of them as unique entities even if value passed has been same.

// refrence ( Non-primitive )
// array, Objects, Functions

const  heros  = ["shaktiman", "naagraj", "doga"];// Array

//Objects

 let myObj ={
 name: "hitesh",
  age:22,
 }

 const myFunction = function(){
    console.log("hello world");
    
 }

 console.log(typeof userEmail);
 
 
