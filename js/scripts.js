
var userInputSentence = prompt("Enter a sentence");
var firstAndLast = function(words) {
return (words.charAt(0) + words.charAt(words.length - 1)).toUpperCase();
}
var firstLast = firstAndLast(userInputSentence);

//alert(firstAndLast(userInputSentence));

var lastAndFirst = function(letters) {
return firstLast.charAt(1) + firstLast.charAt(0);
}

//alert(lastAndFirst(firstLast));

var doAll = function() {
return userInputSentence + lastAndFirst(firstLast);
}
//alert(doAll());

var fourth = function() {
return userInputSentence.charAt(userInputSentence.length / 2) + doAll();
}
var finalThing = fourth();
//alert(fourth());

var reverse = function() {
	return finalThing.split("").reverse().join("");
}
//alert(reverse());

jQuery("#Neo").click(function() {
  alert(userInputSentence);
});

jQuery("#Killary").click(function() {
  alert(reverse());
});
