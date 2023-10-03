/* Arithmatic operators
+
-
*
/
++
--
** Exponential a^b
 */

let a=5;
let b=3;

console.log("Addiiton of a and b = ", a+b);
console.log("subtraction of a and b = ", a-b);
console.log("subtraction of a and b = ", a*b);
console.log("multiplication of a and b = ", a/b);
console.log("Increment of a and b = ", a++,"and", b++);
console.log("Decrement of a and b = ", a--,"and", b--);
console.log("exponetional of a and b = ", a**b,"and",b**a); //cant get it

/* Assigment operator
=
+=
-=
*=
/=
**=    a=a**b
 */

let a1=5;
let b1=4;
console.log(a1=b1);
console.log(a1+=b1);
console.log(a1-=b1);
console.log(a1*=b1);
console.log(a1/=b1);
console.log(a1**=b1); // sunny I cant understand this

/* comparsion operator
==
!=
===
!==
>
<
>=
<=
? ternary operatoer // how to use this?
 */
let m=2;
let n=4;
console.log(m==n);
console.log(m===n);
console.log(m!=n);
console.log(m!==n);
console.log(m>n);
console.log(m<n);
console.log();

/* logical operator
&&
||
!
 */

let p=4;
let r=6;

console.log(p>2 && r<2);
console.log(p==2 || r==6);
p1=true;
console.log("p1 =true",!p1);