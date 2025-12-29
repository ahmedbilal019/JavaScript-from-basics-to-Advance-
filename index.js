// DataTypes in js.
//there are six different datatypes in javascript.
//1- Number
//2- String
//3- Boolean
//4- null
//5- undefined
//6- Object
// -------------

// >> Difference between Primitive and non-premitive data type?//

//1) Primitive Data Type:

// this data type contain simple, single and fixed sizes data.
// premitive data type are fast and lightweight.
// premitive data type Hold the actual value.
// examples:
//     number, string, boolean, null, undefined, symbol, bigint

// ===========================//

//2) Non-Primitive Data Type:

// This is complex data type.
// Can hold multiple values.
// They are slower then premitive data type.
// Store address (reference) in memory. Stored by reference.
// Example:
//   Object, Array, Function

// -----------------------------

// Difference Between Strong Typing and Loose Typing::

// >> Javascript is also refered as Loose typing language
// because of the following reasons:

// In Javascript you will not specifies the datatype when declaring variable.
// Unlike some other programming languages like in java,
// we need to sepecify the datatype on the time of varaible decleration.This is called as String Typing.

var a = 11;
console.log(a); //a is a number.

var a = "Bilal";
console.log(a); //now a is a string.

var a = true;
console.log(a); //now a has a boolean datatype.

//console.log(b); //b has a datatype undefined.

// Number /
let num = 200;
var n = 36778;
let num2 = 3.4;

// String /
let firstName = "Ahmed";
let secondName = "Bilal";

// Escaping of Characters within Strings:

// If you want to use quotation marks within a string, you have several
// options, depending on the type of quotation marks you want to use
// within the string and on the type of quotation marks you use to define
// the string.

var Name = "My name is 'Ahmed Bilal'";
console.log(Name);
var edu = 'I am a "CS Graduate"';
console.log(edu);
var about = 'I am a "Boy"';
console.log(about);

//>> The technical term for this prepending with the backslash
// character is escaping (the backslash character is also called an escapecharacter)

let str = "hello!\n Welcome to this repo.";
console.log(str);
let str2 = "\t javascript"; //tab indentation
console.log(str2);

// string concatenation.
let myIntro = "Hey! " + Name + " and " + edu;
console.log(myIntro);

// another way of doing above is using Templete string, where we use backticks instead of single or double quotes and define
// a placeholder using ${} notation
let Intro = `Hey!  ${Name} and ${edu}`;
console.log(Intro);
