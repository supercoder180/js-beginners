
const user = {
    username : "hitesh",
    price: 999,

    welcomeMessage: function() {
            console.log(`${this.username}, welcome to the page`);
            
    }
}

// user.welcomeMessage()
// user.username ="sam" // context ot changed i.e value is being changed
// user.welcomeMessage()

//console.log(this);// Now in the node environment the value seems to be an {}(empty object has been passed)

// This keyword talks about the current context and its values.

// but when the same gets executed in the browser it shows window object.
// so within the browser window object is captured as lobal object and this is how the events of windows will be captured.

// Sumary :- This keyword return empty object when executed in node env since no gloabl object is declared
// but in the Browser (this keyword returns window object as glbal object.)

// function chai(){

//     //console.log(this);// here lot of refrences are being made it means this contains something.
//     let username= "hitesh"
//     console.log(this.username);// O/P as undefined since this only works with objects and not when used with functions
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
    }

chai()

// In arrow function does not uses this keyword.

// const addTwo = (num1 , num2) => {
//     return num1 + num2 
// }

// console.log(addTwo(3,4));

//const addTwo = (num1 , num2) => num1 + num2 // implicit return 

const addTwo = (num1 , num2) => ({username: "hitesh"})// how to return object implicitly in arrow function.
console.log(addTwo(3,4));

//IIFE

(function chai () {
    console.log(`DB connected`);
    
}) (); // named IIFE // semi colon is required since IIFE executes immediately 

( (name) =>{
    console.log(`DB Reconnected ${name}`);
    
})("Niel")




       


