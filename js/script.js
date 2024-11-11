"use strict";
console.clear();

let counter = 0;
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');

let seeCountdown = document.getElementById('countdown');
let seconds = 10;

let randomNumbers = [];
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
            randomNumbers.push(randomNumber);
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
    }
}, 1000);

// prendo le risposte dell'utente e le inserisco in un array
answersForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(parseInt(inputs[i].value));
        console.log(userNumbers);
    }
    checkAnswer ();
});

function checkAnswer() {
    let correctAnswer = 0;  // Conta il numero di risposte corrette
    let wrongAnswer = [];   // Memorizza i numeri sbagliati

    console.log("Numeri generati: ", randomNumbers);
    console.log("Numeri inseriti: ", userNumbers);

    // Confronta ogni numero dell'utente con i numeri random
    for (let i = 0; i < randomNumbers.length; i++) {
        console.log(`Confronto ${randomNumbers[i]} con ${userNumbers[i]}`);
        
        // Verifico che i valori inseriti siano valori numerici
        if (randomNumbers[i] === userNumbers[i]) {
            correctAnswer++;  
        } else {
            wrongAnswer.push(userNumbers[i]);  // Aggiungi il numero sbagliato all'array
        }
    }

    // Mostra il risultato
    const result = document.getElementById('messageResult');
    if (correctAnswer === 5) {
        result.innerHTML = "Congratulazioni, hai indovinato tutti e 5 i numeri. Hai vinto!";
    } else {
        result.innerHTML = `Mi dispiace, hai sbagliato i seguenti numeri: ${wrongAnswer.join(', ')}. I numeri esatti erano: ${randomNumbers.join(', ')}.`;
    }
}

// Reset delle variabili
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function() {
    randomNumbers = [];       
    userNumbers.length = 0;   
    counter = 0;              
    seconds = 10;             
    
    // Resetto la ul
    numbersList.innerHTML = '';  
    seeCountdown.innerHTML = seconds;  
    seeCountdown.classList.remove('d-none');  
    numbersList.classList.remove('d-none');  
    answersForm.classList.add('d-none');  
    document.getElementById('messageResult').innerHTML = '';
});