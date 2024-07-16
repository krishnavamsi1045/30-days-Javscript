//Day2

//Activity1 Arthmetic operations
let num1 = 3;
let num2 = 2;

console.log(`The sum is:`+add(num1,num2));
console.log(`the difference is :`+sub(num1,num2));
console.log(`the multiply is :`+multiply(num1,num2));
console.log(`the division is :`+divide(num1,num2));
console.log(`the remiander is :`+reminder(num1,num2));

function add(a, b){
        return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function reminder(a,b){
    return a%b;
}

//Activity2 Assignment Operators

let number1 = 56;
number1  +=1;
console.log(number1);


let number2 = 88;
number2 -=1;
console.log(number2);


//Activity3 Comparision Operators

let a = 2;
let b = 9;

if(a>b) {
    console.log(`true`)
}
else{
    console.log(`false`);
}

if(a<b){
    console.log(`true`);
}
else{
    console.log(`false`);
}

let x = 22;
let y = 234

if(x>=y){
    console.log(`x may be greater or equal to y`);
}
else{
    console.log(`y is greater than x`);
}

let isLoggedIn = `true`;
let isLoggedOut = true;

if(isLoggedIn == isLoggedOut){
    console.log(`yes both are same`);
}
else{
    console.log(`no both are not same`);
 }
// What Should Happen
// Logically, after type coercion, both values should be true, and the if block should execute. However, this is not what actually happens in JavaScript:
// Actual Comparison Process
// When comparing a string to a boolean using ==, JavaScript does not convert the string to a boolean. Instead, it converts the boolean to a number and then compares it with the string
// as we can't convert the string into number then it make it into NaN (which is not a number) which results else block to execute 

let aNum = 1;
let aString = `1`
if(aNum == aString){
    console.log(`yes both are same`);
}
else{
    console.log(`no both are not same`);
 }

 let bNum = 1;
 let aBool = 1;

 if(bNum == aBool){
    console.log(`yes both are same`);
 }
 else{
    console.log(`no same man`);
 }

 //Activity4 Logical Operators

 let xNum1 = 22;
 let yNum2 = 2;
 if(xNum1 || yNum2){
    console.log(`true`);
 }
 else{
    console.log(`false`);
 }

 if(xNum1 && yNum2){
    console.log(`true`)
 }
 else{
    console.log(`false`);
 }


 //Activity5 Terinary Operator

 let message = ``;

 let showNoification = message? message:`no message to show`;
 console.log(showNoification);

 //practice on ternary 

 function isNumber(number){
    let bool = typeof(number) === `number` ? true:false;
    return bool;
 }
 console.log(isNumber(5));