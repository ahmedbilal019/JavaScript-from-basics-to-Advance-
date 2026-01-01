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

// (1) Number /
let num = 200;
var n = 36778;
let num2 = 3.4;

//(2) String /
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

// (3) Boolean
let isAdmin = true;
var isLogin = false;

// (4) Arrays
// Elements in an array are arranged in index location (starting from 0)
let arr = ["bilal", 24, "CS graduate"];
console.log(arr);
console.log(arr[0]); //access the elements of array

// multidimensional array

const shoppingCard = [
  ["book", 200],
  ["pens", 100],
  ["bag", 1000],
];

// accessing elements in multidimentional array

let secondItem = shoppingCard[1][0]; //accessing the first element of second array
console.log(secondItem);

// (5) Objects

// in object : variables are called properties or attributes
// functions are called object method.
// Object contains key value pairs.

let myObj = {
  name: "javascript book",
  price: 500,
  author: "xyz",
  printDescription: function () {
    console.log(`${this.author}:${this.name}|:${this.price}`);
  },
};
// name, price, author are properties
// printDescription is a method
// this keyword address the current object. like the above this.name address the name property in myObj .

// (6) undefiend
var d;
console.log(d); //output will be undefined bcz the variable is declared but didnot assigned a value.
var d = "abc";
console.log(d);

// (7) null
// null represent to empty object

const dog = {
  name: "Bello",
};
const person = {
  firstName: "John",
  lastName: "Doe",
  pet: dog,
};
console.log(person.pet); // Output: Object {name: "Bello"}
person.pet = null;
console.log(person.pet); // Output: null

// Arthematic operators in js

// add
let sum = 3 + 4;
console.log("sum= " + sum);
// subtract
let sub = 50 - 9;
console.log("subtraction= " + sub);
// division
let div = 30 / 5;
console.log("division= " + div);
// Multiplication
let mul = 20 * 5;
console.log("dimultiplication= " + mul);
// modlus
let modlus = 30 % 2;
console.log("modulus= " + modlus);
// increment
let v = 3;
v++;
console.log(v);
// decrement
let u = 9;
u--;
console.log(u);
// short form while using operators
let result = 30;
result += 10;
console.log(result); //30+10 output:40
result -= 20;
console.log(result); //40-20 output:20
result /= 5;
console.log(result); //20/5 output:4
result *= 4;
console.log(result); //4*4 output:16
result %= 3;
console.log(result); //16%3 output:1

// Logical Operators:
// logical values are use to deal with
//  boolean values like "True and False"

// AND Operator (&&)
// The AND operator returns true if both operands are true. Otherwise, it returns false.

// OR Operator (||)
// The OR operator returns true whenever one of the two operands is true.
//  It only returns false if both operands are false.

// NOT Operator (!) (Negation operator)
//  if the operand is true, the NOT returns false; if the operand is false, the operator returns true.

var a = true;
var b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);


////// Comparison Operators: //////

// (==) Equal
//compare the value only not the datatype
console.log(5 == 5); //true
console.log(10 == "10"); //true
console.log(0 == false); //true
console.log(1 == true); //true

// (!=) Unequal to
console.log(10 != 8); //true
console.log(3 != 3); //false

// (===) strictly equal to
// compair value as well as datatype also
console.log(10 === "10"); //false
console.log(1 === true); //false

// (!==) strictly unequal to
console.log(4 !== 10); //true

// (>) Greater than

// (<) Less than

// (>=) Less than or equal to

// (<=) Greater than or equal to

/// Optional Chaining Operator (?)  ///
// This operator is placed directly after a
// property when it is accessed, which ensures that the next hierarchy
// level is only accessed if the corresponding property exists.

const user = {
  firstName: "ahmed",
  lastName: "bilal",
  contact: {
    email: "abc@gmail.com",
    phoneNo: "09383736363",
  },
};

console.log(user.contact?.email);
console.log(user.education?.marks); //undefined bcz the education property did not exist
