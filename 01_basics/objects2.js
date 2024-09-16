
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname: {
        userFullname :{
            firstname :"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 ={obj1, obj2}
//const obj3 = object.assign({}, obj1, obj2)
const obj3 ={...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        name: "abc"

    },
    {

    },
    {

    },
]

users[1].email
console.log(Object.keys(tinderUser));// gives the op in an array
console.log(Object.values(tinderUser));// gives the values as well in the form of array.
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogedIn'));


// destructuring of objects

const course ={
    courseName :"js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor } = course 
console.log(courseInstructor);






