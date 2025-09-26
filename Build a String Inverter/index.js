/*Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.*/
/*
  User Stories:
  You should create a function named reverseString that takes a string as an argument.
  The function should return the reversed string.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));

// You cannot use reverse() on string as this is array function so you have to convert string to array by using
// split
