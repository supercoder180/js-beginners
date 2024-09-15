// Stack and Heap memory 

// Stack memory is used for primitive datatypes whereas heap memory is used for the Non-Primitive dataypes 

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

// objects as heap

let userOne = {
    email: "usergoogle.com",
    upi:"user@ybl"

}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email); // both will get the same reference from the heap 


// stack -> In stack we tend to get the copy/ refrence of the value and not the actual value 
// Heap -> In heap we tend to get the actual refrence of the value and that tends to get changed 





