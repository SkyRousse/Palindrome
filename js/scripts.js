$(function() {
	$("form").submit(function(event) {
  event.preventDefault();
	var word = $("input#word").val();
	var wordArr = word.split("");
	var reversedArr = wordArr.slice();
	reversedArr.reverse();
	word = wordArr.join('');
	drow = reversedArr.join('');
	if (word === drow) {
	alert("You have a palindrome")
	} else {
	alert("This is not a palindrome")
	}
   });
});/*This file is for your custom js.  All yours*/
