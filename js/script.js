"use strict";
console.clear();

const numbersToGuess = [];

let i = 0;
const numbersList = document.getElementById('numbers-list');

while (i < 5) {
    const randomNumber = getRndInteger(1, 100);
    let newLi = document.createElement('li');
    newLi.innerText = randomNumber; 
    numbersList.append(newLi);
    i ++;
    // console.log(newLi);
}

const userNumbers = [];