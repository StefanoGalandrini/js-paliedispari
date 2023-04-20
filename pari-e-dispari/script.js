/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// declare DOM variables
const myButton = document.querySelector(".btn-submit");
const answerParent = document.querySelector(".result");
let myWord;
let answer = document.createElement("p");

myButton.addEventListener("click", function () {
	myWord = document.querySelector("input").value;

	// execute code only on non-empty strings
	if (myWord.length == 0) {
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

function invertWord(word) {
	// cicle to reverse the word
	let rev = "";
	for (let i = myWord.length - 1; i >= 0; i--) {
		rev += myWord[i];
	}
	return rev;
}

function isPalindrome(word1, word2) {
	console.log(word === revWord);
	return myWord === revWord;
}
