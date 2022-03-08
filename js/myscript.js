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

function insertNumber(array,element){
    for(let i = 0; i < array.length; i++){
        let child = document.createElement("p");
        let parent = document.getElementById(element);
        parent.appendChild(child).innerHTML = array[i];
    }
}

/* function cancelNumbers(element){
    let parent = document.getElementById(element);
    parent.innerHTML = " ";
}  */


const numbers = uniqueRandomNumbers(5,1,100);
const time = 1500;
insertNumber(numbers,"container-numbers");


const timeOut = setTimeout(cancelNumbers,time);
function cancelNumbers(){
    let parent = document.getElementById("container-numbers");
    parent.innerHTML = " ";
}

