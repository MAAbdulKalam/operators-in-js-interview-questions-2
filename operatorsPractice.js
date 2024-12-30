// /*1. Number Conversion and Arithmetic Operations
// Write a program that accepts two string inputs representing numbers and performs:
// Addition - Subtraction - Multiplication - Division.
// Print the results and their types. */
// let a = "3";
// let b = "6";
// //using unary operator : changing string into number: 
// console.log(+a + +b); //9
// console.log(+a - +b); //-3
// console.log(+a * +b); //18
// console.log(+a / +b); //0.5
// // --------------------------------------------
// // or other type also using "Number" in log to avoid confusion :
// console.log(Number(a) + Number(b)); //9
// console.log(Number(a) - Number(b)); //-3
// console.log(Number(a) * Number(b)); //18
// console.log(Number(a) / Number(b)); //0.5

// /*2. String Interpolation (template literals) vs Concatenation : 
// Create a program that uses both:
// String interpolation with backticks (template literals).
// String concatenation using +.
// Compare how they handle different types of inputs (e.g., strings, numbers). */
// let x = "ak";
// let y = 75;
// let z = "50";
// console.log(`${x} bought soap with the price of ${y}`);
// console.log(Number(y) + Number(z));
// console.log(y + z);

// /*3. Truthy and Falsy Checks
// Write a program that iterates over an array of values like [0, "", "JavaScript", null, undefined, 42, [], {}].
// For each value, log whether it is truthy or falsy using if statements. */
// let checkTheValue = [0, "", "JavaScript", null, undefined, 42, [], {}];
// let check = "javascript";
// if (!check) {   //!check becomes falsy.
//     console.log(`${check} is falsy!`);
// } else {
//     console.log(`${check} is truthy!`);
// }

// /*4. Nested Ternary for Grade Calculation
// Accept user input for marks and calculate the grade: 
// A: marks >= 90
// B: marks >= 75
// C: marks >= 50
// F: marks < 50
// Use nested ternary operators to determine the grade. */
// let userMark = 7;
// let grade = (userMark >= 90) ? "A" :
//     (userMark >= 75) ? "B" :
//         (userMark >= 50) ? "C" : "Fail";
// console.log(`${userMark} : is grade ${grade}`);

// /*5. Finding Maximum of Three Numbers
// Create a program that accepts three numbers as input and uses:
// Relational operators
// Logical operators
// To find and print the largest number. */
// let num1 = 5
// let num2 = 7;
// let num3 = 3;
// if (num1 > num2 && num1 > num3) {
//     console.log(`num1: ${num1} is greater than ${num2} and ${num3}`);
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(`num2: ${num2} is greater than ${num1} and ${num3}`);
// } else {
//     console.log(`num3: ${num3} is greater than ${num1} and ${num2}`);
// }

// /*6. Type Conversion and Concatenation
// Write a program that takes a number, converts it to a string using .toString() and concatenates it with another string (e.g., "Value is: ").
// Then, convert the concatenated result back into a number using parseInt(). */
// let numb6 = 8;
// let numb7 = numb6.toString();
// let value = numb7;
// console.log("Value is: ", parseInt(value));  //output : Value is: 8.

// /*7. String and Array Methods
// Write a program that:
// Accepts a string input.
// Converts it into an array of characters using .split().
// Reverses the array using .reverse().
// Joins it back into a reversed string using .join(). */
// // let Array1 = ["apple", "banana", "orange", "pineapple"];
// let str = "Hello world, I'm AK!";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

// /*8. Compound Assignment in a Shopping Cart
// Simulate a shopping cart where:

// You start with a balance of $100.
// Add an item worth $25 using +=.
// Subtract a coupon of $10 using -=.
// Log the final balance. */
// let balance = 100;
// balance += 25;
// balance -= 10;
// console.log(`Final balance: $${balance}`);

// /*9. Even or Odd with Loops
// Create a program that accepts a range of numbers (start and end) and prints whether each number is even or odd using the % operator.*/
// let start = 3;
// let end = 5;
// for (let numberCheck = start; numberCheck <= end; numberCheck++) {
//     if (numberCheck % 2 === 0) {
//         console.log(`${numberCheck} is a Even number`);
//     }
//     else {
//         console.log(`${numberCheck} is a Odd number`);
//     }
// }

/*1. Arithmetic Operations with Type Coercion
Write a program that takes two inputs (a string and a number, e.g., "10" and 5) and 
performs addition, subtraction, multiplication, and division. Log the results and their types. */
let a = "10";
let b = 5;
console.log(Number(a) + Number(b));  //15
console.log(Number(a) - Number(b));  //5
console.log(Number(a) * Number(b));  //50
console.log(Number(a) / Number(b)); //2

/* 2. Logical Operators with Boolean Conversion
Write a program that accepts user input and checks whether it's empty using the || operator. Then, use the && operator to validate non-empty strings. Log the results.*/
let input1 = "";
let result = input1 || "default value";
console.log(`The input is ${result}`); //default value
//using &&  operator to validate empty string.
if (input1 && input1.trim()) {
    console.log("The input is valid and non-empty");
}else{
    console.log("The input is empty");
}
/*3. Comparison of == and ===
Create a program that compares a string number ("20") with an integer (20) using both == and ===. Explain the difference in the output. */
let num1 = "20";
let num2 = 20;
console.log(num1 == num2); //true : Here == equality just checks the value .
console.log(num1 === num2); //false : Here === equality checks the both value and datatype.

/*4. Relational Operators with Strings and Numbers
Use <, >, <=, and >= to compare a string ("15") and a number (10). Log and analyze the results of these comparisons. */
let numb1 = "15";
let numb2 = 10;
console.log(numb1 < numb2); //false
console.log(numb1 > numb2); //true
console.log(numb1 <= numb2); //false
console.log(numb1 >= numb2); //true

/*5. Ternary Operator for Discounts
Write a program that calculates a discount for a shopping cart. If the total amount is greater than $50,
apply a 20% discount; otherwise, apply a 10% discount. Use a ternary operator. */
let totalAmount = 50;
let discountPercentage = totalAmount > 50? 20 : 10;
let discountedAmount = totalAmount - (totalAmount * discountPercentage / 100);
console.log(`Total amount $${totalAmount}`);
console.log(`discount applied ${discountPercentage}%`);
console.log(`Amount after discount $${discountedAmount}`);

/*6. Type Conversion with Unary Plus
Write a program that takes a string input of "42" and converts it into a number using the unary + operator. Log the result and its type.*/
let No_1 = "42";
console.log(typeof +No_1);

/*7. Data Type Identification
Create a program that accepts multiple types of input (number, string, boolean, object, etc.) and logs their data types using the typeof operator. */
let w = 10;
let x = "20";
let y = true;
let z = null;
console.log(typeof w); //number
console.log(typeof x); //string
console.log(typeof y); //boolean
console.log(typeof z); //For z (which is null), typeof will return "object" due to a historical JavaScript design issue, but null is not an object.

/*8. Concatenation vs String Interpolation
Write a program that concatenates two strings using the + operator and then repeats the same using template literals. 
Compare the results when adding a string and a number. */
let p = "10";
let q = 20;
console.log(p + q); //1020 . using string concatenation.
console.log(`${p} + ${q}`); //10 + 20 . using template literals.
console.log(+p + q); //30 . using unary + operator to convert string into a number.

/*9. Modulo for Odd/Even Check
Create a program that checks if a given number (input as a string) is odd or even using the % operator. Use parseInt() to convert the input into a number. */
let Check1 = "5";
Check1 = parseInt(Check1)  //converting string into a number using parseInt
if (Check1%2===0){
    console.log(`${Check1} is a even number`);
}else{
    console.log(`${Check1} is a odd number`); //5 is a odd  number.
} 

/*10. Compound Assignment for Bank Balance
Simulate a bank account where:

You start with a balance of $200.
Deposit $50 using +=.
Withdraw $30 using -=.
Log the final balance. */
let bankBalance = 200;
bankBalance += 50;
bankBalance -= 30;
console.log(bankBalance);














































