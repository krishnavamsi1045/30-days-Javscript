//Activity 1
function evenOrOdd(num){
    if(num % 2 == 0){
        console.log(`even`)
    }
    else{
        console.log(`odd`);
    }
}

//evenOrOdd(5);

function squareOfNumber(num){
    return num*num;
}

//console.log(squareOfNumber(5));

function maximum(num1,num2){
    if(num1>num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}

//maximum(5,2);

function concat(word1,word2){
    console.log(word1+word2)
}

//concat(`krishna`,  `vamsi`);


const sum = (num1,num2)=>{
    let ans =  num1+num2
    console.log(ans);
}
 //sum(88,56);

 const isCharacterPresent = (word1,character)=>{
        for(let i=0;i<word1.length;i++){
            if(word1.charAt(i) === character){
                return true;
            }
        }
        return false;
 }

 //console.log(isCharacterPresent(`krishnavamsi`,`z`));

 //Activity 4

 function twoParameters(num1,num2){
    return num1 * num2;
 }

 ///console.log(twoParameters(88,56))

 function greet(name = `vamsi`){
   // console.log(`hai mr.${name}`);
 }

 greet();

 //Activity5 Higher-Order Functions

//  const [a,,b]= [1,2,3];
//  console.log(a);
//  console.log(b);
//  console.table([a,b]);

 const array = [1,2,10,22,88,56];

 //maps
 const array2 = array.map((item)=>{
    return item>2;
}
);

 //console.log(array2);


 const array3 = [{id:1,name:'krishna'},{id:2,name:'vamsi'}];

 const array4 = array3.map((item) => {
    if(item.id<3){
   return item.name = `mr.` + item.name
    }
});

 //console.log(array4);

//filter

const ranks = [100,90,80,20,45];

const ranks2 = ranks.filter((item)=>{
    return item>80;
})

//console.log(ranks2)


//reduce
const itemsInCart = [20,500,2000,300];

const totalSum = itemsInCart.reduce((acc,item)=>{
    return acc+item;
},0)

//console.log(totalSum)

//Activity5 
const higerOrderFunction = (funct,values)=>{
    for(let i=0;i<values;i++){
        funct();
    }
}

function fn(){
    console.log(`hello world`)
}

//higerOrderFunction(fn,4);

//write a higher order function that takes two function and a value apply the first function to the value and then second function to the result 
const multipleHigerOrderFunction = (funct1,funct2,value)=>{
   let sum = funct1(value);

  let product =  funct2(sum);

  return product;
}

function funct1(num){
    return num+num;
}

function funct2(num){
    return num*num;
}

console.log(multipleHigerOrderFunction(funct1,funct2,8))
