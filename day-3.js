//Day3
//Activity1 if/else

function nature(num){
    if(num>0){
        console.log(`positive`);
    }
    else if(num == 0){
        console.log(`equal`);
    }
    else{
        console.log(`negative`);
    }
}

function isEligible(num){
    if(num>=18){
        console.log(`yes eligible`);
    }
    else{
        console.log(`not eligible to vote`)
    }
}

//Activity2 nested-if-else

function greatest(num1,num2,num3){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
        if(num1>num3){
            console.log(`${num1} is greater than ${num3} too`)
            console.log(`${num1} is greatest among ${num1},${num2},${num3}`);
        }
        else{
            console.log(`${num1} is smaller than ${num3} too`)
            console.log(`${num3} is greatest among ${num1},${num2},${num3}`);
        }
    }
    else if(num2>num1){
        console.log(`${num2} is greater than ${num1}`);
        if(num2>num3){
            console.log(`${num2} is even greater than ${num3}`);
            console.log(`${num2} is greatest among ${num1},${num2},${num3}`);
        }
        else{
            console.log(`${num2} is smaller than ${num3}`);
            console.log(`${num3} is greatest among ${num1},${num2},${num3}`);
        }
    }
    else if(num1<num3){
            console.log(`${num3} is greather than ${num1}`);
            if(num2<num3){
                console.log(`${num3} is greather than ${num2}`);
                console.log(`${num3} is greatest among ${num1},${num2},${num3}`);
            }
           else{
            console.log(`${num3} is smaller than ${num2}`);
            console.log(`${num2} is greatest among ${num1},${num2},${num3}`);
           }
        }

    else{
        console.log(`all the ${num1},${num2},${num3} are same`);
    }
}
//greatest(88,88,88);
//more optimized way 
function greatestOptimized(num1,num2,num3){
    let max = num1;
    if(num2>max){
        max = num2;
    }
    if(num3>max){
        max = num3
    }
    console.log(`${max} is greatest among ${num1},${num2},${num3}`);
}



//Activity3 Switch case
function determineDay(num){
    switch(num){
        case 1:
            console.log(`monday `);
            break;
        case 2:
            console.log(`tuesday`);
            break;
        case 3:
            console.log(`wednesday`);
                break;
        case 4:
            console.log(`thursday`);
                 break;   

        case 5:
            console.log(`friday`);
                break;   
        case 6:
            console.log(`saturday`);
                    break; 
        case 7:
            console.log(`sunday`);
            break; 
           default:           
        console.log(`enter a valid form`);
            
    }

}
//determineDay(7);


function assignGrades(min,max){

    let maximum = max;
    let minimum = min
    if(min>maximum){
        maximum = min;
        minimum = max;
    }
    let grade ;
    switch(true){
        case (min> 90  && maximun <=100) :
            grade = 'A';
            console.log(`you got A grade`);
            break;

        case (min>80 && maximum <=90):
            grade = 'B';
            console.log(`you got B grade`);
            break;

        case (min>70 && maximum<=80):
            grade = 'C';
            console.log(`you got c grade`);
            break;
        case (min>60 && maximum<=70):
            grade = 'D';
            console.log(`you got D grade`);
            break;
        case (min>60 && maximum<=70):
            grade = 'E';
            console.log(`you got E grade`);
            break;    

        default:
            grade= 'F';
            console.log(`you'r failed`);
    }
}

//assignGrades(80,20)


//Activity4 Termary Operator

function isPrime(num){
    let isPrime = (num<=1)?false:(num<=3)?true:(num%2 == 0 || num%3 == 0)?false:true;
    console.log(isPrime);
}

isPrime(0);

//Activity5 Combining Conditions

function isLeapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
        return true;
        
    }
    else{
        return false;
    }
}

console.log(isLeapYear(200));