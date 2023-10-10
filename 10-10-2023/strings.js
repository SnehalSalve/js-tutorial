let name = "snehal"

console.log(name.length);

let sentence = `my name is snehal`;
console.log(sentence);

let sen = `${name}`;
console.log(sen);

let a = `This is ${name}`;
console.log(a);

let user = "Harry";
console.log(user.length);

let b = "   moon   "

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice());
console.log(name.replace("snehal","sayali"));
console.log(name.concat(user));
console.log(b.trim());


//Q 1 print a string using for loop

let str = "Cute"
let i;
for(i=0;i<str.length;i++){
    console.log(str[i]);

}

//
const str1 = 'The quick brown fox jumps over the lazy dog.';

const words = str1.split(' ');
console.log(words[3]);
// Expected output: "fox"


const str2 = "I like to play PUBG";
console.log(str2.charAt(0));
console.log(str2.charAt(5));

// Accept a string from user

let userName = prompt("What's your name?");
alert(`Your name is ${userName}`);