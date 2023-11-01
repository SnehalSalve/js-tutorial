//Object

let newObject = {
    name : "snehal",
    age : 23,
    city : "pune"
}

console.log(newObject); // print all like this {name: 'snehal', age: 23, city: 'pune'}

for(let a in newObject){
    console.log(a); // print only object name like  name age city
}

for(let b in newObject){
    console.log(newObject[b]); // print only values like snehal 23 pune
}

//function

const myFunction = () => {
    console.log("inside arrow function");
}

function demoFun(){
    console.log("inside normal function");
}

myFunction();
demoFun();


//String

let user = "Harry";
console.log(user);
console.log(user[0]); // print H
console.log(user[1]); // prints a
console.log(user.length); // print 5
console.log(user.toUpperCase()); //print HARRY

//Array

let newArray = [1,2,3,4,5];
console.log(newArray); // print (5) [1, 2, 3, 4, 5]
console.log(newArray[2]); // print 3



