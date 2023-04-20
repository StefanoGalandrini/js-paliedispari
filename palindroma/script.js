/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
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
