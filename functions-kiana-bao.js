// Write a function named marco that returns "polo".
 const marco = () => {
     return "polo"
 }
  console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
 const greeting = (name) => {
     return `Welcome, ${name}!`
 }
 console.log(greeting("kiana"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
 const oddOrEven = (number) => {
     if (number %2 === 0){
         return `${number} is Even`
     }
     else {
         return `${number} is Odd`
     }
 }
 console.log(oddOrEven(443543))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
 const triple = (num) => {
     return num * 3
 }
 console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
 const multiply = (num1, num2) => {
     return num1 * num2
 }
 console.log(multiply(4,2))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
 const divisibleBy = (num1, num2) => {
     if (num1 % num2 === 0) {
         return  `${num1} is evenly divisible by ${num2}`
     }
     else {
         return `${num1} is not evenly divisible by ${num2}`
     }
    }
console.log(divisibleBy(8,3))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
 const assignGrade = (numberScore) => {
     if (numberScore >= 90 && numberScore <=100) {
         return 'A'
     }
     else if (numberScore >= 80 && numberScore <=89) {
         return 'B'
     }
     else if (numberScore >= 70 && numberScore <=79) {
         return 'C'
     }
     else if (numberScore >= 60 && numberScore <=69) {
         return 'D'
    }
     else if (numberScore >= 0 && numberScore <=59){
         return 'F'
     }
     else {
         return 'error: not valid range'
     }
 }
 console.log(assignGrade(505))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
 const isLonger = (string1, string2) => {
     if (string1.length > string2.length) {
         return string1
     }
     else {
         return string2
     }
 }
  console.log(isLonger("kiana", "bao"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
 const greaterNum =(num1,num2)=> {
     if (num1 > num2) {
         return num1
     }
     else {
         return num2
     }
 }
 console.log(greaterNum(2,3))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling =(string)=> {
    return string.toUpperCase()
}
console.log(yelling("ahhhhh"))

// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

    let portugese = "Olá Mundo"
    let hawaiian = "Aloha Honua"
    let indonesian = "Halo Dunia!"
    let japanese = "こんにちは世界"
    let italian = "Ciao mondo!"

    const helloWorld = (code) =>{ 
        if (code === portugese || code ===  hawaiian || code === indonesian || code === japanese || code === italian){
            return `${code} is Hello World! in English`
        }   
    }
    console.log(helloWorld(portugese))

// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

    const pluralizer = (num, noun) => {
        if (num > 1){
            if (noun === "sheep"){
                return num + " " + noun
            } else if ( noun === "species" ){
                return num + " " + noun
            } else if ( noun === "goose" ){
                return num + " geese"
            } else if ( noun === "child"){
                return num + " children"
            } else if ( noun === "person"){
                return num + " people"
            }
        } else {
            return num + " " + noun
        }
    }

    console.log(pluralizer(23120, "goose"))