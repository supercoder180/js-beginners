// Let's learn 

const accountID = 1234
let accountEmail = "coder@gmail.com"
var accountPasscode  = "Coder@123"
accountCity = "NewYork" // not a good method to initialize a variable without declaring let or const.

accountPasscode = "coder@234"
accountCity = "Mumbai" 
accountEmail = "roadster@gmail.com"

let accountState;

/*console.log(accountPasscode);
console.log(accountCity);
console.log(accountState);*/


// var keyword is not used now since it used to change value at various other places.
// we can also use table format to ease out the use case.

console.table([accountID, accountEmail, accountPasscode, accountCity , accountState])


/*
 Try to change the accountID 
accountID =234
console.log(accountID);
Output:-Assignment to constant variable.
Note :- const varible can not be reassigned.


let: This keyword declares a block-scoped variable that can be updated
 but not re-declared within the same scope.

 const:- This keyword declares a block-scoped variable whose value cannot be changed through reassignment. 
 It must be initialized at the time of declaration.

 var :- This keyword declares a variable that is function-scoped or globally-scoped if not inside a function. 
 Variables declared with var can be re-declared and updated.

 */



