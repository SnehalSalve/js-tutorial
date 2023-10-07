//two types of functions normal and arrow 
/*
let a,b,c,d;

function add(x,y){
    console.log("addition is = " + x+y);
}

add(2,5);

//arrow function

const avg = (x,y,z,w) => {
let average = x + y + z + w / 4;
document.write("average is = " + average);
}

avg(5,4,2,7);
 */

//Q 1 write a program to print a marks of student in an object using for loop

/*
const marks = { //this is object of student and his marks
    snehal : 87,
    sayali : 75,
    payal : 60,
    mansi : 41,
    priya : 18
};
let i;
for(i= 0;i<Object.keys(marks).length;i++){
    console.log("student name = " + Object.keys(marks)[i] + " \nand his marks = " + marks[Object.keys(marks)[i]]);
}

console.log(Object.keys(marks)); //it will return as array

*/

//Q 2 write a program in Q1 using for in loop
/*
let key;
for(key in marks){
    console.log("marks of " + key + " are " + marks[key]);
}
*/

//Q 3 write a program to print "try again" until the user enters the correct number

/*
let correctNum = 7;

while(i != correctNum){
    console.log("try again");
    i=prompt("Enter a ronaldo's jersey number");
};
console.log("you entered the correct number");

 */

//Q 4 write a function to find a mean of 5 numbers
let a,b,c,d,e;
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
};

console.log("mean = "+ mean(2,5,4,7,6));
