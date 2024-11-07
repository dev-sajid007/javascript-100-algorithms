//Write a function that returns the sum of two numbers.
//Write a function that returns the sum of all numbers regardless of # of params.

function sum1(a,b){
    return a + b;
}

console.log(sum1(2,3));



function sum2(...params){
    let total = 0;
    params.forEach((element) => {
        total += element;
    });
    return total;
}

console.log(sum2(1,2,3,4));

