"use strict";
const animals = ['cat', 'dog', 'goat'];
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (const animal of animals) {
    if (animal === 'dog') {
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === 'cat') {
        console.log(`A ${animal} would be a good companion at home.`);
    }
    else if (animal === 'goat') {
        console.log(`A ${animal} is an adorable pet that also give us milk.`);
    }
}
console.log("\nWhat these animals have in common:");
console.log("Any of these animals could be a great pet!");
