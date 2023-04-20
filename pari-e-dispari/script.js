/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// declare DOM variables
const btnEven = document.querySelector(".btn-even");
const btnOdd = document.querySelector(".btn-odd");
const answerParent = document.querySelector(".result");
let myChoice;
let inputChoice = document.querySelector("#number");
let randomNum;
let answerData = document.createElement("div");
let answerVictory = document.createElement("p");

btnEven.addEventListener("click", function () {
	answerData.innerHTML = "";
	answerVictory.innerHTML = "";
	myChoice = true;
	inputNum = parseInt(inputChoice.value);

	// execute code only if input is between 1 and 5
	if (inputNum >= 1 && inputNum <= 5) {
		makeResult(myChoice, inputNum);
	} else {
		answerData.innerHTML = "Valore non valido";
		answerData.className = "";
		answerParent.appendChild(answerData);
	}
	inputNum.innerHTML = "";
});

btnOdd.addEventListener("click", function () {
	answerData.innerHTML = "";
	answerVictory.innerHTML = "";
	myChoice = false;
	inputNum = parseInt(document.querySelector("#number").value);

	// execute code only if input is between 1 and 5
	if (inputNum >= 1 && inputNum <= 5) {
		makeResult(myChoice, inputNum);
	} else {
		answerData.innerHTML = "Valore non valido";
		answerData.className = "";
		answerParent.appendChild(answerData);
	}
});

function makeResult(parity, inputNum) {
	let myText = "";
	if (parity) {
		myText = "Pari";
	} else {
		myText = "Dispari";
	}
	randomNum = makeRandom(1, 5);
	let sum = inputNum + randomNum;
	let sumParity = checkParity(sum);
	if (parity && sumParity) {
		answerData.innerHTML = `Tu hai scelto <strong>${myText}</strong> e il numero <strong>${inputNum}</strong>.<br> 
		Il numero casuale è <strong>${randomNum}</strong> e quindi il risultato è <strong>${sum}</strong>:<br>`;
		answerParent.appendChild(answerData);

		answerVictory.innerHTML = "Hai vinto!";
		answerVictory.className = "ok";
		answerParent.appendChild(answerVictory);
	} else {
		answerData.innerHTML = `Tu hai scelto <strong>${myText}</strong> e il numero <strong>${inputNum}</strong>.<br> 
		Il numero casuale è <strong>${randomNum}</strong> e quindi il risultato è <strong>${sum}</strong>:<br>`;
		answerParent.appendChild(answerData);

		answerVictory.innerHTML = "Hai perso...";
		answerVictory.className = "ko";
		answerParent.appendChild(answerVictory);
	}
	inputChoice.value = "";
}

function makeRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkParity(number) {
	return number % 2 === 0;
}
