
function sayMyname(){
    console.log("H");
    console.log("I");
    console.log("T");

}
//sayMyname()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}

addTwoNumbers(3,null) // here refrence is being passed into the function

// while defining functions whatever input is being taken is treated as paramters
// and when value is being passed while calling the functions is termed as arguments.

// So in our case 
// function addTwoNumbers(number1, number2) here num1 and num2 is considered as parameters

// and addTwoNumbers(3,4) termed as passing the arguments.

const result = addTwoNumbers(3,5)
console.log();

function addTwoNumbers(number1, number2){
    // let result = number1 +number2
    // console.log("hitesh");
    // return result
    return number1 + number2
}

function  loginUserMessage (username = "Nike"){
    if(username === undefined) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
//loginUserMessage("hitesh") // function is called but for the function we have not enabled any console.log inorder to print the same 

//console.log(loginUserMessage("Reece"));

/***************************************************************************************/

function CalculateCartPrice (val1, val2, ...num1){ // rest operator is being used (...)
    return num1

}
console.log(CalculateCartPrice(200, 400, 500, 600, 700))// lot of values are being passed.

// how to pass objects in Function.

const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// How to pass array in a function.

const myNewArray = [200, "1", 300, 400]

function  returnSecondvalue(getarray){
    return getarray[1] // Here myNewArray was not written coz we will have to look what is being passed in the paramters of the function.

}

console.log(returnSecondvalue(myNewArray));






