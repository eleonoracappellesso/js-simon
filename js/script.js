"use strict";
console.clear();

let i = 0;
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');

let seeCountdown = document.getElementById('countdown');
let seconds = 10;
// faccio apparire un countdown
const timer = setInterval(function () {
    //finchè i secondi sono maggiori di 0 genero 5 num random con un ciclo while e li stampo all'interno di un li creato nella ul
    if (seconds > 0) {
        seeCountdown.innerHTML = --seconds;
        while (i < 5) {
            const randomNumber = getRndInteger(1, 100);
            let newLi = document.createElement('li');
            newLi.innerText = randomNumber;
            numbersList.append(newLi);
            i++;
            // console.log(newLi);
        }
    } //quando i secondi arrivano a 0 allora rimuovo il timer e nascondo i numeri random e faccio apparire il form per l'utente
    else {
        clearInterval(timer);
        numbersList.classList.add('d-none');
        seeCountdown.classList.add('d-none');

        answersForm.classList.remove('d-none');
    }
}, 1000);


