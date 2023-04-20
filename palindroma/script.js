/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// declare DOM variables
const myButton = document.querySelector(".btn-submit");
const answerParent = document.querySelector(".result");
let myWord;
let reversedWord;

myButton.addEventListener("click", function () {
	myWord = document.querySelector("input").value;
	console.log(myWord);
	console.log(typeof myWord);

	if (typeof myWord == "string" && myWord.length > 0) {
		revWord = invertWord(myWord);
		console.log(revWord);
	} else {
		console.log("valore non valido");
	}
});

function invertWord(word) {
	// cicle to reverse the word
	let rev = "";
	for (let i = myWord.length - 1; i >= 0; i--) {
		console.log(i);
		// console.log(myWord[i], rev[j]);
		rev += myWord[i];
	}
	return rev;
}
