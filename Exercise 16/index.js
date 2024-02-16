"use strict";
let guestList = [
    "Zack",
    "John",
    "Ahmed",
];
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
let newGuestAtBeginnibg = "Anakin";
guestList.unshift(newGuestAtBeginnibg);
let newGuestInMiddle = "Matt";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
let newGuestAtEnd = "Mary`";
guestList.push(newGuestAtEnd);
console.log("New set of invitation messages:");
for (let guest of guestList)
    console.log(`Dear ${guest}, you are invited to dinner`);
