//Business logic
var palindrome = function (word) {
	var wordArr = word.split("");
	var reversedArr = wordArr.slice().reverse();
	word = wordArr.join('');
	drow = reversedArr.join('');
	if (word === drow) {
	return true;
	} else {
	return false;
	}
};

//user interface logic
$(function() {
	$("form").submit(function(event) {
  event.preventDefault();
	var word = $("input#word").val();
	var answer =	palindrome(word);
	if (answer === true) {
		$("#arrayOutput").text("This is a palindrome");
	}
	else {
		$("#arrayOutput").text("This is not a palindrome");
	}
   });
});/*This file is for your custom js.  All yours*/
