// Consider the variable:
var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
// console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
// groceryList[3] = "granola"
// console.log(groceryList)

// let groceryList2 = groceryList
// groceryList2[3] = "granola"
// console.log(groceryList2)

// let array = ["granola"]
// console.log(groceryList.concat(array))

// Write the code that will return a subset of the array containing only "chips" and "dip".
//console.log(groceryList[0], groceryList[1])

// console.log(groceryList.slice(0,2))
// groceryList.pop()
// console.log(groceryList)

// Write the code that will add "beans" to the "chips" and "dip" array.
// console.log(groceryList.slice(0, 2).concat(array = ["beans"]))

//-------------------------------

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
    // numbers.unshift(0)
    // console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
    // numbers.push(12)
    // console.log(numbers)
// Write the code that will remove the first number from the array.
    // numbers.shift()
    // console.log(numbers)  // this works!

    // console.log(shift(numbers)) //no good. shift needs to be after for syntex purposes
    
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

let bestNumber = [0]
let creativeEnough = bestNumber.concat(numbers) 
// console.log(creativeEnough) // works
//-------------------------------

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
//  console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
//  console.log(numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
//  console.log(numSet[2])
//-------------------------------

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// Create two arrays consisting of three first names of your cohort members in each.

// Write the code that sorts the names in alphabetical order.

// Write the code that sorts the names in reverse alphabetical order.

// Write the code that sorts all the names in alphabetical order in a single array.
//-------------------------------
// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
console.log(numbers[1], numbers[3], numbers[5])
// console.log(oddIndexes)
// Write the code that adds the values from odd indexes into the oddIndexes array.
oddIndexes.push(numbers[1], numbers[3], numbers[5])
console.log(oddIndexes)