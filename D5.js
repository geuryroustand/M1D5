/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (11,l2) and calculates the area of the associated rectangle.
*/
console.log("===================EXERCISE 1============================");

const area = function (rectangleLength, rectangleWidth) {
  return rectangleLength * rectangleWidth;
};

console.log(area(11, 12));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("===================EXERCISE 2============================");

const crazySum = (one, two) => {
  return one + 3;
};

console.log(crazySum(1, 2));
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("===================EXERCISE 3============================");

const crazyDiff = (givenNumber) => {
  if (givenNumber <= 19) {
    return 19 - givenNumber;
  } else {
    return (19 + givenNumber) * 3;
  }
};

console.log(crazyDiff(50));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

console.log("===================EXERCISE 4============================");

const boundary = (n) => {
  if (n >= 20 || n >= 100 || n === 400) {
    return true;
  }
};
console.log(boundary(19));

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("===================EXERCISE 4============================");

const strivify = (stringRec) => {
  let str = "Strive";

  if (str === stringRec) {
    return stringRec;
  } else {
    return `${stringRec} ${str}`;
  }
};
console.log(strivify("Hi"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (num) => {
  if (num % 3 === 0) {
    return "its a multiplate of 3";
  }
  if (num % 7 === 0) {
    return "its a multiplate of 7";
  }
};

console.log(check3and7(10));

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = (str) => {
  const splitStr = str.split("");

  const reverseAr = splitStr.reverse();

  const joinArray = reverseAr.join("");
  console.log(splitStr);
  console.log(reverseAr);
  console.log(joinArray);
};

console.log(reverseString("Strive"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = (firstLetter) => {
  const first = firstLetter.split(" ");
  console.log(first.toUpperCase());
};

console.log(upperFirst("strive"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
