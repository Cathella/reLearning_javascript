// Declare String Variables
var myFirstName = "Catherine";
var myLastName = "Nakitto";

// Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
/* 
 * \'	single quote
 * \"	double quote
 * \\	backslash
 * \n	newline
 * \r	carriage return
 * \t	tab
 * \b	word boundary
 * \f	form feed 
**/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end.";

// Concatenating Strings with the Plus Equals Operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// Constructing Strings with Variables
var myName = "Catherine";
var myStr = "My name is " + myName + " and I am well!";

// Appending Variables to Strings
var someAdjective = "fun!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// Understand String Immutability
var myStr = "Jello World"; // String values are immutable,
myStr = "Hello World"; // which means that they cannot be altered once created.

// Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks - game
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " away " + myAdverb

