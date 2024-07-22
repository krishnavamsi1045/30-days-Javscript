//Activity1 For Loop
let ans =   ``;
for(let i = 1;i<=10;i++){
   ans += i +` `;
}
//console.log(ans);

function table(num){
    for(let i = 1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

//table(5);

//Activiy2 while Loop
function sumOfNumbers(num){
let sum = 0;
while(num<11){
    sum+=num;
    num++;
}
return sum;
}
//console.log(sumOfNumbers(0));
let descending = ``;
function DecendingOrder(num){
    while(num>0){
        descending += num+` `;
        num--;
    }
}
DecendingOrder(10);
//console.log(descending);


//Activiy3 Do-While-Loop
function dWhile(num){
    let solution = ``;
do{
    solution += num +` `;
    num++;
}
while(num<6){
    return solution;
}

}

//console.log(dWhile(1));

function factorial(num){
    let ans =1;
    if(num==1 || num ==0 ) return ans;
    do{
        ans = ans*num;
        num--;
    }
    while(num>0){
        return ans;
    }
}

//console.log(factorial(5));

//Activity4 nested loops

for(let i=0;i<5;i++){
    let ans = ``;
    for(let j=0;j<=i;j++){
       ans += ` * `;
    }
   // console.log(ans);
}

//Activity 5 Loop Control Statement
let abcd = ``;
    for(let i=1;i<=10;i++){
       
        if(i === 7){
            continue;
        }
       abcd += i+` ` ;
    }

    console.log(abcd)

    let ab = ``;
    for(let i=1;i<=10;i++){
       
        if(i === 7){
            break;
        }
       ab += i+` ` ;
    }

    console.log(ab)