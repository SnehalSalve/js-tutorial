/* loops in js
for loop
for in loop
for of loop
do while loop
while loop
 */

/*
for(let i=1;i<5;i++){
    console.log(i);
}

let ob = {
    mauu:75,
    sam:90,
    harry:40,
    riya:24
}

for(let a in ob){
    console.log("object index = "+a);
    console.log("value of object = "+ob[a]);
}

for(let b of "priyanka"){
    console.log(b);
}
*/

//while loop

let n = prompt("Enter a number ");
n = Number.parseInt(n);
let i=0;

// while(i<n){
//     console.log(i);
//     i++;
// }

//do while loop

do{
    console.log("using do while "+i);
    i++;
}while(i<n);