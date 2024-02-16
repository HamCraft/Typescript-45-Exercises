"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Jack",
    "Alex",
    "Muhammad",
];
exports.guestList = guestList;
let guestHowCantMakeIt = "Talha";
console.log(`${guestHowCantMakeIt} can't make it to Dinner`);
let NewGuest = "Jack";
let idnexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
if (idnexOfguestHowCantMakeIt !== -1) {
    guestList[idnexOfguestHowCantMakeIt] = NewGuest;
}
console.log("Second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to diner.`);
});
