// Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// } 
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {        
//     return `Welcome, ${name}!`
// }
// console.log(greeting("Peter"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if(number % 2 === 0){
//         return `${number} is even`
//     } else {
//         return `${number} is odd`
//     }
// }
// console.log(oddOrEven(5))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) => {
//     return number * 3 
// }
// console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply =(num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply(5, 2))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy =(num1, num2) => {
//     if (num1 % num2 === 0){
//         return `${num1} is evenly divisisible by ${num2}`
//     } else {
//         return `${num1} is not evenly divisisible by ${num2}`
//     }
// }
// console.log(divisibleBy(28, 34))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//     if (score > 90){
//         return 'A'
//     }else if (score <= 90 && score >= 80){
//         return 'B'
//     }else{
//         return 'C'
//     }
// }
// console.log(assignGrade(85))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (str1, str2) => {
//     if (str1.length > str2.length){
//         return str1;
//     }else if (str2.length > str1.length){
//         return str2; 
//     }else{
//            return "They are equal"
//     }
// }
// console.log(isLonger("Peter is smart", "Peter likes to hike"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//     if (num1 > num2){
//         return num1; 
//     }else if (num2 > num1){
//         return num2;
//     }else {
//         return "They are equal"
//     }
// }
// console.log(greaterNum(23, 21))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (str) => {
//     return str.toUpperCase()
// }
// console.log(yelling("I had a blue coffee mug"))

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

// const helloWorld = (lang) => {
//     if (lang === "es"){
//         return "Hola Mundo!"
//     }else if (lang === "de"){
//         return "Hallo Welt!"
//     }else if (lang === "fr"){
//         return "Bonjour Le Monde!"
//     }else if (lang === "it"){
//         return "Ciao Mondo!"
//     }else{
//         return "Hello World!"
//     }
// }
// console.log(helloWorld("es"))

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (num, noun) => {
    
}