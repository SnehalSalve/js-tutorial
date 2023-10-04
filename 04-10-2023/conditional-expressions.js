/* conditional operators
if
if else
if else if 
*/


let a=prompt("Enter your Age = ");
a=Number.parseInt(a);

if(a<0){
    console.log("Invalied age");
}else if(a>0 && a<9){
    console.log("you are kid, you cant drive ");
}
else if(a>9 && a<18){
    console.log("you can drive after 18");
}else{
    console.log("you can drive")
}

//ternary operator

console.log(a>18? "Drive" : "Cant Drive");