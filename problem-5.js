//Sum all the prime numbers up to and including the provided number.

function primeSum(num){

    let primeTotal = 0;

    for(let i = 2;i < num;i++){

        for(let j = 2;j < num;j++){
            if(i === j){
                primeTotal += i;
            }
            if(i%j === 0){
                break;
            }
        }
    }

    return primeTotal;

}

console.log(primeSum(10));
