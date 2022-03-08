/**
 * Function that creates N unique numbers from minimun(min) value to N(maximun)
 * @param {*} N value of how many numbers you want 
 * @param {*} max max value of each number 
 * @param {*} min minimum value of each number
 * @returns {*} return an array of random Unique numbers
 */

function uniqueRandomNumbers(N,min,max){
    const arrayNumbers = [];
    while(arrayNumbers.length < N){
        let number = Math.floor(Math.random() * max + min);
        while(!arrayNumbers.includes(number)){
            arrayNumbers.push(number);
        }
    }
    return arrayNumbers;
    
}

console.log(uniqueRandomNumbers(5,1,100));