// take input using the prompt method using pareInt function to return a number

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// For loop from 1 too user input

for(let i = 1; i <= answer; i++){

// Conditional arguments too check user input

if(i % 3 == 0) {
console.log("Fizz");
} else if(i % 5 == 0) {
console.log("Buzz");
} else if(i % 3 == 0 && i % 5 == 0) {
console.log("FizzBuzz");
} else {
console.log(i);
}
}