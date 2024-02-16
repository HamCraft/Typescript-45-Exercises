let travelDestinations: string[] = ["Tokyo", "London", "Istanbul", "Islamabad", "Mumbai"]


console.log("Origional Order:")
console.log(travelDestinations)


console.log("\n Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort())



console.log("\nShowing array is still in its original order")
console.log(travelDestinations)


console.log("\n Reverse Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort().reverse())
 
console.log("\nShowing array is still in its original order")
console.log(travelDestinations)


console.log("\nReverse Order")
travelDestinations.reverse()
console.log(travelDestinations)

console.log("\nBack to Original")
travelDestinations.reverse()
console.log(travelDestinations)


console.log("\nChange to Alphabatical order")
travelDestinations.sort()
console.log(travelDestinations)

console.log("\nChange to Reverse Alphabatical order")
travelDestinations.sort().reverse()
console.log(travelDestinations)