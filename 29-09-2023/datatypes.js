/* Datatypes in JS
1] Primitive datatypes = 7
    null
    number
    boolean
    bigint
    string
    symbol
    undefined
2] Non - primitive datatype = 1
    object
*/

let a = 55;
console.log(typeof(a));

let b = true;
console.log(typeof(b));

let c = "sayali";
console.log(typeof(c));

let d = null;
console.log(typeof(d));

// const can be modify using object
const student = {
    name:"sayali",
    age:23
}
student['name']="mauu";
console.log(student);
// add a new data
student['city']="pune";
console.log(student);

// Q1 Create a variable of type string and try to add a number on it.

let m="Sayali";
let n=20;
console.log(m+n);

// Q2 use typeof operator to find the datatype of string in last question

console.log(typeof(m));

//Q3 create a const object in JS  can you change it to hold a number letter

const num = {
    name:"payal",
    age:28,
    city:"pune"
}
//num=5;
// it will throug error because const cant hold a value directly.
num['age']=27;
//it will run because we used object to modify your data in const
console.log(num);

//Q4 try to add new key to the const object in problem 3 were you able to do it

/*
const num = {
    name:"payal",
    age:28,
    city:"pune"
}
*/

num['status']="unmarried";
console.log(num);

//Q5 write a JS program  to create a word meaning dictionary of 5 words

const dict={
    zenith:"the highest point of something",
    zealot:"a fervent and even millitant proponent of something",
    yawner:"a person who yawns",
    xenophobia:"a fear of foreginers or strangers",
    selenophile:"a person who fond of or intrested in the moon"
}
console.log(dict);
console.log(dict["selenophile"]);