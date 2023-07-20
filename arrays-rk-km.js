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