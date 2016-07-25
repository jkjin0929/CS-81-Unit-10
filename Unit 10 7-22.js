// Joseph K. Jin
// CS 81
// Assignment 10
// Chapter 7
// Problem #22

var reversal = function() {
	//splits each characters, reverses them, and joins them
	var wordreverse = r.split("").reverse().join("");
	//output
	alert(wordreverse);
};

//user prompt
var r = prompt("Enter a word to reverse");
//function call
reversal(r);