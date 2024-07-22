//Activity1
var number = 88;
//console.log(number);

let name = `vamsi`;
//console.log(name);


//Activity2
const isLoggedIn = true;
//console.log(isLoggedIn);

//Activity3
 let name2 = `krishna`;
 let number2 = 88;
 let isLoggIn  = true;
 let obj1 = {id:1,surname:"mr.krishna"};
 let array1 = [false,2,{id:2,name:"kv"},`i am good boy`]
 let nullDataType = null;
 let undefinedDataType = undefined;
 let symbolDataType =  Symbol(`don't know yet `);
 //to symbols are used as key in the objects
 let SymbolUser = {
    [symbolDataType] :`This key and value pair associates with Symbol`,
    id:2,
    name:`vamsi`
 }

//consoling them all
//console.log(name2);
//console.log(number2);
//console.log(isLoggIn);
//console.log(obj1);
//console.log(obj1.id);
//console.log(array1);
//console.log(nullDataType);
//console.log(undefinedDataType);

// ************************************** Symbol can't be access outside it must be use as key in the object only
// console.log(symbolDataType);



// ********************************************* Symbol can't be accessed with dot opeartor we must use bracket Notation for it
//console.log(SymbolUser.symbolDataType);



//console.log(typeof(SymbolUser));
//console.log(SymbolUser[symbolDataType]);
//console.log(typeof());


for(let key in SymbolUser){
  //  console.log(typeof(key));
}


// ********************************* IMPORTANT ******************************** 
// The Objects works on for-in Loop not for of loop

let findingSymbolType = Symbol(`don't know man yet`);

//console.log(typeof(findingSymbolType));

//the parameter you pass to Symbol is a description for the symbol, and it’s converted to a string. It is not intended to be an object. Hence, Symbol({...}) doesn’t store the object; it just creates a symbol with the string representation of the object as its description.
// let objSymbol = Symbol({
//     id:88,
//     name:"pepper pots",
//     husband:"ironman"
// });
//  console.log(typeof(objSymbol));

//  console.log(objSymbol[id]);

//Activity 4
let name3= `vamsi`;
name3 = `krishna`;
console.log(name3);

//Activity 5

const username = `krishnavamsi`;
//username = `mr.krishnavamsi`;
//console.log(username);


const objConst = {
    id:5688,
    name:`mr.mr.krishnavamsi`
}

//console.log(objConst);

//console.log(objConst.id);

objConst.id=5656;

//console.log(objConst);


const arr = [`hai`,`jai`];

arr[1] = `nai`;

console.log(arr);

console.log(arr.length);
console.log(arr.push(2));

console.log(arr);


