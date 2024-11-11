"use strict";
console.clear();

let counter = 0;
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');

let seeCountdown = document.getElementById('countdown');
let seconds = 10;

const userNumbers = [];
const confirmBtn = document.getElementById('confirmBtn');
const inputs = document.querySelectorAll('input');

// faccio apparire un countdown
const timer = setInterval(function () {
    //finchè i secondi sono maggiori di 0 genero 5 num random con un ciclo while e li stampo all'interno di un li creato nella ul
    if (seconds > 0) {
        seeCountdown.innerHTML = --seconds;
        while (counter < 5) {
            const randomNumber = getRndInteger(1, 50);
            let newLi = document.createElement('li');
            newLi.innerText = randomNumber;
            numbersList.append(newLi);
            counter++;
            // console.log(newLi);
        }
    } //quando i secondi arrivano a 0 allora rimuovo il timer e nascondo i numeri random e faccio apparire il form per l'utente
    else {
        clearInterval(timer);
        numbersList.classList.add('d-none');
        seeCountdown.classList.add('d-none');
        answersForm.classList.remove('d-none');

        // prendo i valori degli input del form e li metto in un array al click
        confirmBtn.addEventListener('click', function (event) {
            for (let i = 0; i < inputs.length; i++) {
                userNumbers.push(parseInt(inputs[i].value));
                console.log(userNumbers);
            }
            event.preventDefault;
        });
    }
}, 1000);





