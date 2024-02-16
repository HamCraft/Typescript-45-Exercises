let guestList: Array<string> = [
    "Zack",
    "John",
    "Ahmed",
];


for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`)
}

let newGuestAtBeginnibg: string = "Anakin" 
guestList.unshift(newGuestAtBeginnibg)


let newGuestInMiddle: string = "Matt"
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)


let newGuestAtEnd: string = "Mary`"
guestList.push(newGuestAtEnd)


console.log("New set of invitation messages:")

for(let guest of guestList) 

    console.log(`Dear ${guest}, you are invited to dinner`)