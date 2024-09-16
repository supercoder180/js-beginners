//singelton 

//const Jsuser = {} emoty object
const mySym = Symbol("key1")

const Jsuser = {
    name : "hitesh",
    age : 18,
    location: "Mumbai",
    email: "hitesh@google.com",
    [mySym] :"mykey1",
    isLoggedIn: false,
    lasLoginDays: ["Monday", "Sunday"] // can be passed as array as well

}

// console.log(Jsuser.email);// common ways to access objects.
// console.log(Jsuser["email"]);
// console.log(Jsuser.mySym);
// console.log(typeof mySym);
// console.log(typeof Jsuser.mySym);

Jsuser.email ="hitesh@chatgpt.com"
//Object.freeze(Jsuser)// changes will not propogate for that object

Jsuser.greeting = function(){
    
    console.log("Hello Jsuser ");
    
}
Jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(Jsuser.greeting());









