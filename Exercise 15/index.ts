
let guestList: Array<string> = [
    "Jack",
    "Alex",
    "Muhammad",
];



let guestHowCantMakeIt: string = "Talha"
console.log(`${guestHowCantMakeIt} can't make it to Dinner`)



let NewGuest: string = "Jack"
let idnexOfguestHowCantMakeIt: number = guestList.indexOf(guestHowCantMakeIt)


if (idnexOfguestHowCantMakeIt !== -1)
{
    guestList[idnexOfguestHowCantMakeIt] = NewGuest
}

console.log("Second set of invitation messages:")
guestList.forEach((guest:string) =>
{
    console.log(`Dear ${guest}, you are invited to diner.`)
})

export{guestList}