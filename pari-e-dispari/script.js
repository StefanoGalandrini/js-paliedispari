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
let inputNum;
let randomNum;
let answer = document.createElement("p");

btnEven.addEventListener("click", function () {
	myChoice = true;
	inputNum = parseInt(document.querySelector("#number").value);

	// execute code only if input is between 1 and 5
	if (inputNum >= 1 && inputNum <= 5) {
		makeResult(myChoice, inputNum);
	}
});

btnOdd.addEventListener("click", function () {
	myChoice = false;
	inputNum = parseInt(document.querySelector("#number").value);

	// execute code only if input is between 1 and 5
	if (inputNum >= 1 && inputNum <= 5) {
		makeResult(myChoice, inputNum);
	}
});

function makeResult(parity, inputNum) {
	randomNum = makeRandom(1, 5);
	let sum = inputNum + randomNum;
	let sumParity = checkParity(sum);
	if (parity && sumParity) {
		console.log("hai vinto");
	} else {
		console.log("hai perso");
	}
}

/*
		answer.innerHTML = "Valore non valido";
		answer.className = "";
	} else {
		revWord = invertWord(myWord);
		if (isPalindrome(myWord, revWord)) {
			answer.innerHTML = "La parola è palindroma!";
			answer.className = "ok";
		} else {
			answer.innerHTML = "La parola non è palindroma...";
			answer.className = "ko";
		}
	}
	answerParent.appendChild(answer);
});
*/

function makeRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkParity(number) {
	return number % 2 === 0;
}
