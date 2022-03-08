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

function insertNumber(array,element){
    for(let i = 0; i < array.length; i++){
        let child = document.createElement("p");
        child.classList.add("m-0","p-4");
        let parent = document.getElementById(element);
        parent.appendChild(child).innerHTML = array[i];
    }
}

const numbers = uniqueRandomNumbers(5,1,100);
const time = 4000;
insertNumber(numbers,"container-numbers");


const timeOut = setTimeout(cancelNumbers,time);
function cancelNumbers(){
    let parent = document.getElementById("container-numbers");
    parent.innerHTML = " ";
}


const userNumbers = [];
const timeOutInsert = setTimeout(userInsertNumber,time + 5);
function userInsertNumber(){
    for(let i = 0; i < numbers.length; i++){
        let insertUserNumber = parseInt(prompt("Inserisci un numero"));
        userNumbers.push(insertUserNumber);
    }
    return userNumbers;
}


const timeOutCheck = setTimeout(checkNumbers,time + 2000);
function checkNumbers(){
    let score = 0;
    console.log(userNumbers + " user numbers");
    console.log(numbers + " numeri");    
    for(let i = 0; i < userNumbers.length; i++){
        if (userNumbers.includes(numbers[i])){
            score++;
        }
    }
    
    console.log("Hai indovinato n." + score + " numeri");
    document.getElementById("output-score").classList.add("p-4");
    document.getElementById("output-score").innerHTML = ("Hai indovinato n." + score + " numeri");
}


