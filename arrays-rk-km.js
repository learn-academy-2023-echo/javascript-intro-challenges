 var groceryList = ["chips", "dip", "cookies"]
 // Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"))
console.log(groceryList)
// Write the code that will add "granola" to the end of array without altering the original array.
var granola = "granola"
console.log(groceryList.concat(granola))

// Write the code that will return a subset of the array containing only "chips" and "dip".
var chipAnddip = groceryList.slice(0,2)
console.log(chipAnddip)
// Write the code that will add "beans" to the "chips" and "dip" array.
var beans = "beans"
console.log(chipAnddip.concat(beans))

 var numbers = [2, 4, 6, 8, 10]
// // Write the code that will add the number 0 to the beginning of the array.
 console.log(numbers.unshift(0))
 console.log(numbers)
// // Write the code that will add the number 12 to the end of the array.
 console.log(numbers.push(12))
 console.log(numbers)
// // Write the code that will remove the first number from the array.
 console.log(numbers.shift())
 console.log(numbers)
// // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
 var numbersTwo = [0]
 console.log(numbersTwo.concat(numbers))


 var numSet = [2, 13, 6, 8, 4, 2]
 // Write the code that finds the index of the first appearance of the number 2.
 console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
 console.log(numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
console.log(numSet.slice(3,4))


var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = (characters.reverse())
console.log(charsReversed)
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))
// Create two arrays consisting of three first names of your cohort members in each.

// Write the code that sorts the names in alphabetical order.

// Write the code that sorts the names in reverse alphabetical order.

// Write the code that sorts all the names in alphabetical order in a single array.

