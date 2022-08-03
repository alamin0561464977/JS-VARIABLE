/* 
------------------
VARIABLE
-------------------
1. What is JavaScript?
2. How does JS Works?
3. What is Variable?
4. Declare a variable
5. Types of Variable? How can you find out type of a variable
6. Primitive and non-primitive data types
7. Naming Convention of JS variables
8. Math Operation +, -, *, /, %
9. Short hand: +=, -=, *=, /=
10. ++, --
11. parseInt, ParseFloat
12. toFixed
*/
// ============================================//

// 1.  What is JavaScript???
// JavaScript is a scripting language for creating dynamic web page content. It creates elements for improving site visitors' interaction with web

// 2. How does JS Works
// aScript works with HTML and CSS to build web apps or web pages. JavaScript is supported by most modern web browsers like Google Chrome,

// 3. What is Variable
// Variables are containers for storing data (storing data values).

// 4. Declare a variable
var variableName = "variable item";
var numberTypeVariable = 22;
var stringTypeVariable = "This is a String";
var booleanTypeVariable = true;
// console.log(typeof booleanTypeVariable)

// 6. Primitive and non-primitive data types
// Primitive data types  .. string, boolean, number, null, undefined
// non-primitive data types .. Array, Object

// 7. Naming Convention of JS variables

// 8. Math Operation +, -, *, /, %
var x = 10;
var y = 20;
var total1 = x + y;
var total2 = x - y;
var total3 = x * y;
var total4 = x / y;

// 9. Short hand: +=, -=, *=, /=
var shortHand = 10;
shortHand++;
shortHand--;
shortHand += 5;
shortHand -= 5;
shortHand *= 5;
shortHand /= 5;
shortHand = shortHand + 5;

// 11. parseInt, ParseFloat
var parseInt1 = 23;
// console.log(parseFloat("23.344"))

// 12. toFixed
var a = 5;
var b = 3;
var t = a / b;
console.log(t.toFixed(2))
