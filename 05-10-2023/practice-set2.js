//Q1 use logical operator to find whether the age of a person is between 10 and 20
/*
let age=prompt("enter your age ");
if(age>10 && age<20){
    console.log("your age is between 10 and 20");
}else{
    console.log("your age is not in betweeen 10 and 20");
}
*/
//Q2 demonstrate the use of switchcase statments in js
/*
let a=prompt("Enter age");
switch(a){
    case '11':console.log("age is 11",a);
    break;
    case '12':console.log("age is 12",a);
    break;
    case '13':console.log("age is 13",a);
    break;
    case '14':console.log("age is 14",a);
    break;
    case '15':console.log("age is 15",a);
    break;
    case '16':console.log("age is 16",a);
    break;
    case '17':console.log("age is 17",a);
    break;
    case '18':console.log("age is 18",a);
    break;
    default:console.log("not accpeted");
}
 */

//Q3 write a js program to find whether a number is divisible by 2 and 3
// let num=prompt("enter a number ");
// if(num%2==0 && num%3==0){
//     console.log("the given",num,"number is divisible by 2 and 3");
// }else{
//     console.log("the given",num,"number is not divisible by 2 and 3");
// }



//Q4 write a js program to find whether a number is divisible by 2 or 3
//let num=prompt("enter a number ");
// if(num%2==0){
//     console.log("the given",num,"number is divisible by 2");
// }else if( num%3==0){
//     console.log("the given",num,"number is divisible by 3");
// }else{
//     console.log("not by 2 and 3");
// }

//Q5 print "you can drive" or "you cant drive" based on the age being greather than 18 using ternary operator
let age=22;
let a=age>18? "you can drive" : "you cant drive";
console.log(a);