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

//switch case 
/*
    const expr = 'O';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
*/

const choice="sub";
let n1=2,n2=3;

switch(choice){
    case 'add':
        console.log("adiition = ",n1+n2);
        break;

    case 'sub':
        console.log("substraction = ",n1-n2);
        break;

    case 'mul':
        console.log("multiplication = ",n1*n2);
        break;

    case 'div':
        console.log("division = ",n1/n2);
        break;


}