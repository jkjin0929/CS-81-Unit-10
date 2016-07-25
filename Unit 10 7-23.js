// Joseph K. Jin
// CS 81
// Assignment 10
// Chapter 7
// Problem #23

var start = function(){
	//call function reversal when user clicks on reverse button
	document.getElementById("btn").addEventListener("click", reversal, false);
};

var reversal = function() {
	//get user input value
	var r = document.getElementById("word").value;
	//splits each characters, reverses them, and joins them
	var wordreverse = r.split("").reverse().join("");
	//output
	document.getElementById("result").innerHTML = wordreverse;
};

window.addEventListener("load", start, false);